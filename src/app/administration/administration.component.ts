import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent {

  TicketArray : any[] = [];


  comment: string ="";
  imageUrl: File | undefined;
  location: string ="";
    id= "";

  constructor(private http: HttpClient )
  {
    this.getAllTicket();
 
  }

  register()
  {
  
    let bodyData = {
      "comment" : this.comment,
      "imageUrl" : this.imageUrl,
      "location" : this.location
    };
 
    this.http.post("http://localhost:8081/api/v1/image/save", bodyData,{responseType:'text'}).subscribe((resultData: any) => 
    {
      console.log(resultData);
      alert("Ticket Registered Successfully");
      this.getAllTicket();

      this.comment = '';
      this.imageUrl = undefined;
      this.location = '';
  });
  
  }


  getAllTicket()
  {
    
    this.http.get("http://localhost:8081/api/v1/image/getAll")
  
    .subscribe((resultData: any)=>
    {
    
        console.log(resultData);
        this.TicketArray = resultData;
    });
  }


  setUpdate(data: any)
  {
   this.comment = data.Comment;
   this.imageUrl = data.imageUrl;
   this.location = data.location;
   this.id = data._id;
   alert(data._id);
  }
 
  UpdateRecords()
  {
    let bodyData = {
      "comment" : this.comment,
      "imageUrl" : this.imageUrl,
      "location" : this.location,
  
    };
    
    this.http.put("http://localhost:8081/api/v1/image/edit"+ "/"+ this.id , bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Ticket enregistrer modification")
        this.getAllTicket();
        this.comment = '';
      this.imageUrl = undefined;
      this.location = '';
    });
  }
 
  save()
  {
    if(this.id == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
 
  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:8081/api/v1/image/delete"+ "/"+ data._id,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Ticket supprimmer")
        this.getAllTicket();
        this.comment = '';
      this.imageUrl = undefined;
      this.location = '';
  
    });
 
  }
}
