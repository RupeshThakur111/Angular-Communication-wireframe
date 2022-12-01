import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docs-management',
  templateUrl: './docs-management.component.html',
  styleUrls: ['./docs-management.component.scss']
})
export class DocsManagementComponent implements OnInit {
  DocsData: any;
  DocsName: any;
  docsDataFromStorage: any;
  Doc: any;
  uploadForm !: FormGroup;
  NameChange !: FormGroup
  curentUSer: any;
  curentUSer2: any;
  filterFileName: any;
  urlid: any
  urlid2: any

  constructor(private fb: FormBuilder, private fb2: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.curentUSer2 = JSON.parse(localStorage.getItem('currentUser')!);
    if (this.curentUSer2 == null) {
      this.router.navigate(['/welcome']);
    }
    this.docsDataFromStorage = JSON.parse(localStorage.getItem('DocumentStorage')!);
    this.NameChange = this.fb2.group({
      EditNewName: ['', [Validators.required]]
    });
    this.uploadForm = this.fb.group({
      description: ['', [Validators.required]],
      UploadFile: ['', [Validators.required]],
      //EditNewName:['',[Validators.required]]
    });
  }

  edit(id: number): any {
    this.urlid = id;
  }

  delete(id: number): any {
    this.urlid2 = id;
  }

  save() {
    this.filterFileName = this.uploadForm.value.UploadFile;
    this.filterFileName = this.filterFileName.slice(12);
    this.Doc = {
      id: Number(new Date()),
      Label: this.uploadForm.value.description,
      filename: this.filterFileName
    };
    this.DocsData = JSON.parse(localStorage.getItem('DocumentStorage')!);
    this.DocsName = this.DocsData ? this.DocsData : [];
    this.DocsName.push(this.Doc);
    localStorage.setItem('DocumentStorage', JSON.stringify(this.DocsName))
  };
  editdocs(): void {
    let docsStorage = JSON.parse(localStorage.getItem('DocumentStorage')!)
    for (let i = 0; i < docsStorage.length; i++) {
      if (docsStorage[i].id == this.urlid) {
        docsStorage[i].Label = this.NameChange.value.EditNewName;
      }
    }
    localStorage.removeItem('DocumentStorage');
    localStorage.setItem('DocumentStorage', JSON.stringify(docsStorage));
  }
  deletedocs(): void {
    let docsStorage = JSON.parse(localStorage.getItem('DocumentStorage')!)
    for (let i = 0; i < docsStorage.length; i++) {
      if (docsStorage[i].id == this.urlid2) {
        docsStorage.splice(i, 1);
        break;
      }
    }
    localStorage.removeItem('DocumentStorage');
    localStorage.setItem('DocumentStorage', JSON.stringify(docsStorage));
  }
}
