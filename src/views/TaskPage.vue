<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            ({{ data[questionNumber].points }} pkt)
          </ion-col>
          <ion-col size="6" style="text-align: right;">
            ({{ data[questionNumber].date }})
          </ion-col>
        </ion-row>
        <div class="center">
          <div v-if="isImageVisible" style="margin-right: 10%; margin-left: 10%;">
            <ion-row>
              <img :src="require(`@/assets/${image}`)"/>
            </ion-row>
          </div>
          <ion-row class="margin-bottom-10 container" >
            <ion-label class="cq" style="white-space: pre-wrap;" :key="questionNumber">
              {{ data[questionNumber].content }}
            </ion-label>
          </ion-row>
          
          <div v-if="taskType=='abcd'">
            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(0)" class="button95 ion-text-none" 
                :color="clicked==0 ? 'secondary' : 'primary'"> A. {{data[questionNumber].answers[0]}} 
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(1)" class="button95 ion-text-none" 
                :color="clicked==1 ? 'secondary' : 'primary'"> B. {{data[questionNumber].answers[1]}} 
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(2)" class="button95 ion-text-none" 
                :color="clicked==2 ? 'secondary' : 'primary'"> C. {{data[questionNumber].answers[2]}} 
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(3)" class="button95 ion-text-none" 
                :color="clicked==3 ? 'secondary' : 'primary'" > D. {{data[questionNumber].answers[3]}} 
                </ion-button>
              </ion-col>
            </ion-row>
          </div>
          <div v-if="taskType=='tf'">
            <ion-row style="padding-left: 1rem; padding-right: 1rem;">
              <ion-col size="10" class="ion-no-margin ion-no-padding">
                <div class="container" style="margin: 0; margin-right: .5rem;">
                  <ion-label>
                    {{ data[questionNumber].answers[0] }}
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
                    {{ data[questionNumber].answers[1] }}
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
          <div v-if="taskType=='open'">
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
      answersLength: 0,
      firstIndex: 0,
      lastIndex: 0,
      tf: ["T", "F"],
      isImageVisible: false,
      image: null,
    };
  },
  methods: {
    checkAnswer(answer) {
      this.clicked = answer;
    },
    checkAnswerTf(num, answer) {
      num ? this.clickedTf1 = answer : this.clickedTf2 = answer;
    },
    next() {
      // jeśli została zaznaczona odpowiedź abcd
      if (this.clicked != null){
        // do tablicy answers dodaj numer pytania oraz odpowiedź
        this.answers.push([this.questionNumber, this.data[this.questionNumber].answers[this.clicked], null]);
        // zliczenie punktów zdobytych
        if (this.data[this.questionNumber].answers[this.clicked] == this.data[this.questionNumber].correctAnswer){
          this.points += this.data[this.questionNumber].points;
        }
      }
      // jeśli została zaznaczona odpowiedź tf
      else if (this.clickedTf1 != null || this.clickedTf2 != null){
        this.answers.push([this.questionNumber, this.clickedTf1 ? this.data[this.questionNumber].correctAnswer[this.clickedTf1] : null, 
                                                this.clickedTf2 ? this.data[this.questionNumber].correctAnswer[this.clickedTf2] : null])
        // zliczenie punktów zdobytych      
        if (this.tf[this.clickedTf1] == this.data[this.questionNumber].correctAnswer[0] &&
            this.tf[this.clickedTf2] == this.data[this.questionNumber].correctAnswer[1]){
          this.points += this.data[this.questionNumber].points;
        }
      }
      else {
        this.answers.push([this.questionNumber, null, null]);
      }
      // zliczenie maksymalnych punktów
      this.maxPoints += this.data[this.questionNumber].points;
      // odciśnięcie przycisku
      this.clicked = null; this.clickedTf1 = null; this.clickedTf2 = null;

      // sprawdzenie czy jest jeszcze jakieś pytanie z danej kategorii 
      if (this.questionNumber < this.answersLength) {
        this.questionNumber++;
        this.taskType = this.data[this.questionNumber].type;
        this.data[this.questionNumber].image ? this.isImageVisible = true : this.isImageVisible = false;
        this.image = this.data[this.questionNumber].image;
      }
      else { // jeśli nie ma, przejście do podsumowania
        store.commit("SET_TIME", Math.round(new Date()) - this.time);
        store.commit("SET_RESULT", { gained: this.points, max: this.maxPoints });
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
    const categoryIndex = (element) => element.category == store.state.selectedCategory;
    this.firstIndex = this.data.findIndex(categoryIndex);
    this.lastIndex = this.data.findLastIndex(categoryIndex);
    this.questionNumber = this.firstIndex;
    this.taskType = this.data[this.questionNumber].type;
    this.answersLength = this.lastIndex - this.firstIndex;

    this.data[this.questionNumber].image ? this.isImageVisible = true : this.isImageVisible = false;
    this.image = this.data[this.questionNumber].image;

    renderMathInDocument();
  },
  watch: {
    questionNumber() {
      this.renderMath();
    }
  },

});
</script>