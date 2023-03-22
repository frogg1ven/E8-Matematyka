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
            Zdobyte punkty: {{ points[0] || "0" }} / {{ points[1] || "0" }}
          </ion-label>
        </ion-row>

        <ion-row>
          <ion-col class="container" style="margin-right: 1%">
            <ion-label style="white-space: pre-wrap;">
              Czas:<br/> 
            </ion-label>
            <div v-if="time">
              {{ time }}
            </div>
          </ion-col>
        </ion-row>

        <ion-row class="container">
          <ion-label style="white-space: pre-wrap;" type="mode=text" :key="questionNumber" id="solution">
            {{ data[answers[questionNumber][0]].content }}
          </ion-label>
        </ion-row>

        <ion-row>
          <ion-col class="container" style="margin-right: 1%">
            <ion-label style="white-space: pre-wrap;">
              Twoja<br/>odpowiedź:<br/> 
            </ion-label>
            <div v-if="answers">
            <ion-label>
              {{ answers[questionNumber][1] }}
            </ion-label>
            </div>
          </ion-col>
          <ion-col class="container" style="margin-left: 1%">
            <ion-label style="white-space: pre-wrap;">
              Poprawna<br/>odpowiedź:<br/>
            </ion-label>
            <ion-label>
              {{ data[answers[questionNumber][0]].correctAnswer }}
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
      answers: [[0,0,0]],
      data: jsonData,
      time: "0:00",
      answersLength: 0,
    }
  },
  methods: {
    previous() {
      if (this.questionNumber > 0) this.questionNumber--;
      else this.questionNumber = this.answersLength;
      console.log(this.questionNumber)
    },
    next() {

      if (this.questionNumber < this.answersLength) this.questionNumber++;
      else this.questionNumber = 0;
      console.log(this.questionNumber)
    },
    renderMath () {
      this.$nextTick(function(){
        renderMathInElement("solution");
      })
    },
    backToCategories() {
      this.$router.push({ path: 'categories' })
    },
    msToMinutesAndSeconds(millis){
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return (
        seconds == 60 ?
        (minutes+1) + ":00" :
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds
      );
    },
  },
  mounted() {
    renderMathInDocument();
    this.points = store.state.points;
    this.answers = store.state.answers;
    console.log(this.answers)
    this.answersLength = this.answers.length - 1;
    this.time = this.msToMinutesAndSeconds(store.state.time);
    console.log(this.time)
  },
  watch: {
    questionNumber() {
      this.renderMath();
    }
  },
  
});
</script>
