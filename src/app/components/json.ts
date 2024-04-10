export const json = {
  completedHtmlOnCondition: [
    {
      expression: "{nps-score} <= 5 or {rebuy} = false",
      html: {
        default:
          "Thanks for your feedback! We highly value all ideas and suggestions from our customers, whether they're positive or critical. In the future, our team might reach out to you to learn more about how we can further improve our product so that it exceeds your expectations.",
      },
    },
    {
      expression: "{nps-score} >= 6 or {nps-score} = 8",
      html: {
        default:
          "Thanks for your feedback. Our goal is to create the best possible product, and your thoughts, ideas, and suggestions play a major role in helping us identify opportunities to improve.",
      },
    },
    {
      expression: "{nps-score} >= 9",
      html: {
        default:
          "Thanks for your feedback. It's great to hear that you're a fan of our product. Your feedback helps us discover new opportunities to improve it and make sure you have the best possible experience.",
      },
    },
  ],
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "rating",
          name: "nps-score",
          title: {
            default:
              "On a scale from 1 to 10, how likely are you to recommend us to a friend or colleague?",
          },
          rateMin: 1,
          rateMax: 10,
          minRateDescription: {
            default: "Very unlikely",
            fr: "Très improbable",
          },
          maxRateDescription: {
            default: "Very likely",
            fr: "Très probable",
          },
          rateDescriptionLocation: "bottom",
        },
        {
          type: "comment",
          name: "disappointing-experience",
          visibleIf: "{nps-score} <= 5",
          title: {
            default:
              "How did we disappoint you and what can we do to make things right?",
            fr: "Nous n'avons pas été a la hauteur de vos attentes, comment pouvons-nous améliorer?",
          },
          maxLength: 300,
        },
        {
          type: "comment",
          name: "improvements-required",
          visibleIf: "{nps-score} >= 6",
          title: {
            default: "What can we do to make your experience more satisfying?",
            fr: "Que pouvons-nous faire pour rendre votre expérience plus satisfaisante?",
          },
          maxLength: 300,
        },
        {
          type: "checkbox",
          name: "promoter-features",
          visibleIf: "{nps-score} >= 9",
          title: {
            default: "Which of the following features do you value the most?",
            fr: "Laquelle des fonctionnalités suivantes appréciez-vous le plus ?",
          },
          description: {
            default: "Please select no more than three features.",
            fr: "Veuillez ne pas sélectionner plus de trois fonctionnalités.",
          },
          isRequired: true,
          choices: [
            {
              value: "performance",
              text: "Performance",
            },
            {
              value: "stability",
              text: {
                default: "Stability",
                fr: "Stabilité",
              },
            },
            {
              value: "ui",
              text: {
                default: "User interface",
                fr: "Interface utilisateur",
              },
            },
            {
              value: "complete-functionality",
              text: {
                default: "Complete functionality",
                fr: "Ensemble des fonctionnalités",
              },
            },
            {
              value: "learning-materials",
              text: {
                default:
                  "Learning materials (documentation, demos, code examples)",
                fr: "Matériel d'apprentissage (documentation, démos, exemples de code)",
              },
            },
            {
              value: "support",
              text: {
                default: "Quality support",
                fr: "Accompagnement de qualité",
              },
            },
          ],
          showOtherItem: true,
          otherPlaceholder: {
            default: "Please specify...",
            fr: "Veuillez préciser...",
          },
          otherText: {
            default: "Other features",
            fr: "Autres fonctionnalités",
          },
          colCount: 2,
          maxSelectedChoices: 3,
        },
      ],
    },
  ],
  showPrevButton: false,
  showQuestionNumbers: "off",
  completeText: {
    fr: "Envoyer",
  },
  widthMode: "static",
  width: "1000px",
};
