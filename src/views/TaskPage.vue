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
            <ion-label class="cq" style="white-space: pre-wrap;" :key="questionNumber">
              {{data.questions[questionNumber].content}}
            </ion-label>
          </ion-row>

          <div v-if="taskType=='abcd'">
            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(0)" class="button95 ion-text-capitalize" :color="clicked==0 ? 'secondary' : 'primary'"> A. {{data.questions[questionNumber].answers[0]}} </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(1)" class="button95 ion-text-capitalize" :color="clicked==1 ? 'secondary' : 'primary'"> B. {{data.questions[questionNumber].answers[1]}} </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(2)" class="button95 ion-text-capitalize" :color="clicked==2 ? 'secondary' : 'primary'"> C. {{data.questions[questionNumber].answers[2]}} </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(3)" class="button95 ion-text-capitalize" :color="clicked==3 ? 'secondary' : 'primary'" > D. {{data.questions[questionNumber].answers[3]}} </ion-button>
              </ion-col>
            </ion-row>
          </div>
          <div v-if="taskType=='tf'">
            <ion-row style="padding-left: 1rem; padding-right: 1rem;">
              <ion-col size="10" class="ion-no-margin ion-no-padding">
                <div class="container" style="margin: 0; margin-right: .5rem;">
                  <ion-label>
                    Pytanie
                  </ion-label>
                </div>
              </ion-col>
              <ion-col size="1" class="ion-no-margin ion-no-padding" style="display: flex; align-items: center;">
                <ion-button @click="checkAnswerTf(1, 0)" class="button95" :color="clickedTf1==0 ? 'secondary' : 'primary'">
                  P
                </ion-button>
              </ion-col>
              <ion-col size="1" class="ion-no-margin ion-no-padding" style="display: flex; align-items: center;">
                <ion-button @click="checkAnswerTf(1, 1)" class="button95" :color="clickedTf1==1 ? 'secondary' : 'primary'">
                  F
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row class="ion-no-margin ion-no-padding" style="padding-left: 1rem; padding-right: 1rem;">
              <ion-col size="10" class="ion-no-margin ion-no-padding">
                <div class="container ion-no-margin ion-no-padding" style="margin-left: 0; margin-right: .5rem;">
                  <ion-label>
                    Pytanie
                  </ion-label>
                </div>
              </ion-col>
              <ion-col size="1" class="ion-no-margin ion-no-padding" style="display: flex; align-items: center;">
                <ion-button @click="checkAnswerTf(0, 0)" class="button95" :color="clickedTf2==0 ? 'secondary' : 'primary'">
                  P
                </ion-button>
              </ion-col>
              <ion-col size="1" class="ion-no-margin ion-no-padding" style="display: flex; align-items: center;">
                <ion-button @click="checkAnswerTf(0, 1)" class="button95" :color="clickedTf2==1 ? 'secondary' : 'primary'">
                  F
                </ion-button>
              </ion-col>
            </ion-row>

          </div>

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
import { renderMathInDocument } from "mathlive";
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
      clickedTf1: null,
      clickedTf2: null,
      answers: [],
      time: null,
      taskType: "tf",
    };
  },
  methods: {
    checkAnswer(answer) {
      this.clicked = answer;
      console.log(answer);
    },
    checkAnswerTf(num, answer) {
      num ? this.clickedTf1 = answer : this.clickedTf2 = answer;
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
      if (this.questionNumber < this.answersLength) {
        this.questionNumber++;
        this.taskType = this.data.questions[this.questionNumber].type;
      }
      else {
        store.commit("SET_TIME", Math.round(new Date()) - this.time);
        store.commit("SET_RESULT", {gained: this.points, max: this.maxPoints});
        store.commit("SET_ANSWERS", this.answers);
        this.$router.push({ path: 'summary' })
      }
    },
    renderMath () {
      this.$nextTick(function(){
        renderMathInDocument();
      })
    },
  },
  mounted() {
    this.time = Math.round(new Date());
    this.taskType = this.data.questions[this.questionNumber].type;
    this.answersLength = this.data.questions.filter( question => question.category == store.state.chosenCategory).length - 1;
    renderMathInDocument();
  },
  watch: {
    questionNumber() {
      this.renderMath();
    }
  },

});
</script>
