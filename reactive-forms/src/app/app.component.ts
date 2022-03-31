import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile' | 'enterprise' | 'house' | 'cine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'cine';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  // get showEnterpriseEditor() {
  //   return this.editor === 'enterprise';
  // }

  // get showHouseEditor() {
  //   return this.editor === 'house';
  // }

  get showCineForm() {
    return this.editor === 'cine'
  }


  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
