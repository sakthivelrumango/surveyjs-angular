import { Component, OnInit } from "@angular/core";
import { Model } from "survey-core";
import { json } from "./json";
import "./survey.component.css";
import "survey-core/defaultV2.min.css";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "component-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"],
})
export class SurveyComponent implements OnInit {
  model: Model;
  ngOnInit() {
    const survey = new Model(json);
    // survey.data = {
    //   "nps-score": 9,
    //   "promoter-features": ["performance", "ui"],
    // };
    survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
    });
    this.model = survey;
  }
}
