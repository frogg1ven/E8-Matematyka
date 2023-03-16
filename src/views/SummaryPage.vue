<template>
  <ion-page>
    <ion-content>
      <ion-grid class="center" style="width: 100%">
        <ion-row>
          <ion-label class="ct">
            Podsumowanie
          </ion-label>
        </ion-row>

        <ion-row class="container">
          <ion-label>
            Zdobyte punkty: {{points[0]}} / {{points[1]}}
          </ion-label>
        </ion-row>

        <ion-row id="question" :key="questionNumber" class="container">
          <ion-label style="white-space: pre-wrap;">
            {{data.questions[questionNumber].content}}
          </ion-label>
        </ion-row>

        <ion-row>
          <ion-col class="container" style="margin-right: 1%">
            <ion-label style="white-space: pre-wrap;">
              Twoja<br/>odpowiedź:<br/> {{answers[questionNumber][1]}}
            </ion-label>
          </ion-col>
          <ion-col class="container" style="margin-left: 1%">
            <ion-label style="white-space: pre-wrap;">
              Poprawna<br/>odpowiedź:<br/> {{answers[questionNumber][2]}}
            </ion-label>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-button @click="previous" class="button95-left">
            Poprzednie
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button @click="next" class="button95-right">
            Następne
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-button @click="backToCategories" class="button95">
              Kategorie
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage, IonLabel, IonGrid, IonRow, IonCol, IonButton } from "@ionic/vue";
import { renderMathInDocument, renderMathInElement } from "mathlive";
import jsonData from "@/data/data.json";
import store from "@/store/index.js";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
  },
  data() {
    return {
        questionNumber: 0,
        points: [0, 0],
        answers: [[]],
        data: jsonData,
    }
  },
  methods: {
    previous() {
      console.log(this.answers[0][1])
      if (this.questionNumber > 0) this.questionNumber--;
      else this.questionNumber = 2;
    },
    next() {
      console.log(this.answers[0])
      if (this.questionNumber < 2) this.questionNumber++;
      else this.questionNumber = 0;
    },
    renderMath () {
      this.$nextTick(function(){
        renderMathInElement("question");
      })
    },
    backToCategories() {
      this.$router.push({ path: 'categories' })
    }
  },
  mounted() {
    renderMathInDocument();
    this.points = store.state.points;
    this.answers = store.state.answers;
  },
  watch: {
    questionNumber() {
      this.renderMath();
    }
  },
  
});
</script>
