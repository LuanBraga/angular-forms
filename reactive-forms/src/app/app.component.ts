import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile' | 'enterprise' | 'house';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  get showEnterpriseEditor() {
    return this.editor === 'enterprise';
  }

  get showHouseEditor() {
    return this.editor === 'house';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
