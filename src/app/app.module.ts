import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SurveyModule } from "survey-angular-ui";
import { SurveyComponent } from "./components/survey.component";

@NgModule({
    declarations: [AppComponent, SurveyComponent],
    imports: [BrowserModule, SurveyModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }