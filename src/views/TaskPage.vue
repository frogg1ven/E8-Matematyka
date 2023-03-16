<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            ({{data.questions[questionNumber].points}} pkt)
          </ion-col>
          <ion-col size="6" style="text-align: right;">
            ({{data.questions[questionNumber].date}})
          </ion-col>
        </ion-row>
        <div class="center">
          <ion-row class="margin-bottom-10 container" >
            <ion-label class="cq" style="white-space: pre-wrap;" :key="questionNumber" id="question">
              {{data.questions[questionNumber].content}}
            </ion-label>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-button @click="checkAnswer(0)" class="button95" :color="clicked==0 ? 'secondary' : 'primary'"> A. {{data.questions[questionNumber].answers[0]}} </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-button @click="checkAnswer(1)" class="button95" :color="clicked==1 ? 'secondary' : 'primary'"> B. {{data.questions[questionNumber].answers[1]}} </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-button @click="checkAnswer(2)" class="button95" :color="clicked==2 ? 'secondary' : 'primary'"> C. {{data.questions[questionNumber].answers[2]}} </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-button @click="checkAnswer(3)" class="button95" :color="clicked==3 ? 'secondary' : 'primary'" > D. {{data.questions[questionNumber].answers[3]}} </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-button @click="next" class="button95 margin-top-10"> Następne pytanie </ion-button>
            </ion-col>
          </ion-row>
        </div>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage, IonButton, IonRow, IonGrid, IonCol, IonLabel } from "@ionic/vue";
import { renderMathInDocument, renderMathInElement } from "mathlive";
import jsonData from "@/data/data.json";
import store from "@/store/index.js";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonRow,
    IonGrid,
    IonLabel,
    IonCol,
  },
  data() {
    return {
      data: jsonData,
      questionNumber: 0,
      maxPoints: 0,
      points: 0,
      clicked: null,
      answers: [],
    };
  },
  methods: {
    checkAnswer(answer) {
      this.clicked = answer;
      console.log(answer);
    },
    next() {
      if (this.clicked != null){
        this.answers.push([this.questionNumber, this.data.questions[this.questionNumber].answers[this.clicked], this.data.questions[this.questionNumber].answer])
        this.maxPoints += this.data.questions[this.questionNumber].points;
        console.log(this.data.questions[this.questionNumber].answers[this.clicked], this.data.questions[this.questionNumber].answer)
        if (this.data.questions[this.questionNumber].answers[this.clicked] == this.data.questions[this.questionNumber].answer){
          this.points += this.data.questions[this.questionNumber].points;
        }
        this.clicked = null;
      }
      if (this.questionNumber < 2) this.questionNumber++;
      else {
        store.commit("SET_RESULT", {gained: this.points, max: this.maxPoints});
        store.commit("SET_ANSWERS", this.answers);
        this.$router.push({ path: 'summary' })
      }
    },
    renderMath () {
      this.$nextTick(function(){
        renderMathInElement("question");
      })
    },

  },
  mounted() {
    renderMathInDocument();
  },
  watch: {
    questionNumber() {
      this.renderMath();
    }
  },

});
</script>
