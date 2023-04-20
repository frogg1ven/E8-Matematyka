<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="3">
            ({{ data[questionNumber].points }} pkt)
          </ion-col>
          <ion-col size="9" style="text-align: right;">
            ({{ data[questionNumber].date }})
          </ion-col>
        </ion-row>
        <div class="center">
          <div class="offset"/>
          <ion-row class="padding10" v-if="isImageVisible" style="margin-bottom: calc(5px + 1%);">
            <img :src="require(`@/assets/${data[this.questionNumber].date}.svg`)" class="image-container"/>
          </ion-row>
          <ion-row class="margin-bottom-10 container" >
            <ion-label class="cq data-math" style="white-space: pre-wrap;" :key="questionNumber">
              {{ data[questionNumber].content }}
            </ion-label>
          </ion-row>
          
          <div v-if="taskType=='abcd'">
            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(0)" class="button95 ion-text-none" 
                :color="clicked==0 ? 'secondary' : 'primary'"> 
                  <ion-label class="label-padding data-math" :key="questionNumber">
                    {{data[questionNumber].answers[0]}} 
                  </ion-label>
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(1)" class="button95 ion-text-none" 
                :color="clicked==1 ? 'secondary' : 'primary'"> 
                  <ion-label class="label-padding data-math" :key="questionNumber">
                    {{data[questionNumber].answers[1]}} 
                  </ion-label>
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(2)" class="button95 ion-text-none " 
                :color="clicked==2 ? 'secondary' : 'primary'"> 
                  <ion-label class="label-padding data-math" :key="questionNumber">
                    {{data[questionNumber].answers[2]}} 
                  </ion-label>
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(3)" class="button95 ion-text-none" 
                :color="clicked==3 ? 'secondary' : 'primary'" > 
                  <ion-label class="label-padding data-math" :key="questionNumber">
                    {{data[questionNumber].answers[3]}} 
                  </ion-label>
                </ion-button>
              </ion-col>
            </ion-row>
          </div>

          <div v-else-if="taskType=='tf'">
            <ion-row>
              <ion-col size="12" class="ion-no-margin ion-no-padding">
                <div class="container">
                  <ion-label :key="questionNumber" class="data-math">
                    {{ data[questionNumber].answers[0] }}
                  </ion-label>
                </div>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="6">
                <ion-button @click="checkAnswerTf(0, 1)" class="button95-left ion-text-none" :color="clickedTf1==1 ? 'secondary' : 'primary'">
                  <ion-label class="label-padding">
                    Prawda
                  </ion-label>
                </ion-button>
              </ion-col>
              <ion-col size="6">
                <ion-button @click="checkAnswerTf(0, 0)" class="button95-right ion-text-none" :color="clickedTf1==0 ? 'secondary' : 'primary'">
                  <ion-label class="label-padding">
                    Fałsz
                  </ion-label>
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size="12" class="ion-no-margin ion-no-padding">
                <div class="container">
                  <ion-label :key="questionNumber" class="data-math">
                    {{ data[questionNumber].answers[1] }}
                  </ion-label>
                </div>
              </ion-col>
              <ion-col size="6">
                <ion-button @click="checkAnswerTf(1, 1)" class="button95-left ion-text-none" :color="clickedTf2==1 ? 'secondary' : 'primary'">
                  <ion-label class="label-padding">
                    Prawda
                  </ion-label>
                </ion-button>
              </ion-col>
              <ion-col size="6">
                <ion-button @click="checkAnswerTf(1, 0)" class="button95-right ion-text-none" :color="clickedTf2==0 ? 'secondary' : 'primary'">
                  <ion-label class="label-padding">
                    Fałsz
                  </ion-label>
                </ion-button>
              </ion-col>
            </ion-row>
          </div>
          
          <div v-else-if="taskType=='abtf'">
            <ion-row>
              <ion-col size="12" class="ion-no-margin ion-no-padding">
                <div class="container">
                  <ion-label :key="questionNumber" class="data-math">
                    {{ data[questionNumber].answers[0][0] }}
                  </ion-label>
                </div>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="6">
                <ion-button @click="checkAnswerTf(0, 0)" class="button95-left ion-text-none" :color="clickedTf1==0 ? 'secondary' : 'primary'">
                  <ion-label class="label-padding data-math" :key="questionNumber">
                    {{ data[questionNumber].answers[0][1] }}
                  </ion-label>
                </ion-button>
              </ion-col>
              <ion-col size="6">
                <ion-button @click="checkAnswerTf(0, 1)" class="button95-right ion-text-none" :color="clickedTf1==1 ? 'secondary' : 'primary'">
                  <ion-label class="label-padding data-math" :key="questionNumber">
                    {{ data[questionNumber].answers[0][2] }}
                  </ion-label>
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size="12" class="ion-no-margin ion-no-padding">
                <div class="container" >
                  <ion-label :key="questionNumber" class="data-math">
                    {{ data[questionNumber].answers[1][0] }}
                  </ion-label>
                </div>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="6" >
                <ion-button @click="checkAnswerTf(1, 0)" class="button95-left ion-text-none" :color="clickedTf2==0 ? 'secondary' : 'primary'">
                  <ion-label class="label-padding data-math" :key="questionNumber">
                    {{ data[questionNumber].answers[1][1] }}
                  </ion-label>
                </ion-button>
              </ion-col>
              <ion-col size="6" >
                <ion-button @click="checkAnswerTf(1, 1)" class="button95-right ion-text-none" :color="clickedTf2==1 ? 'secondary' : 'primary'">
                  <ion-label class="label-padding data-math" :key="questionNumber">
                    {{ data[questionNumber].answers[1][2] }}
                  </ion-label>
                </ion-button>
              </ion-col>
            </ion-row>
          </div>

          <div v-else-if="taskType=='ab123'">
            <ion-row>
              <ion-col size="6">
                <ion-button  class="button95-left" @click="checkAnswerTf(0, 0)" :color="clickedTf1==0 ? 'secondary' : 'primary'">
                  Tak
                </ion-button>
              </ion-col>
              <ion-col size="6" >
                <ion-button  class="button95-right" @click="checkAnswerTf(0, 1)" :color="clickedTf1==1 ? 'secondary' : 'primary'">
                  Nie
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(0)" class="button95 ion-text-none" 
                :color="clicked==0 ? 'secondary' : 'primary'"> 
                  <ion-label class="label-padding data-math" :key="questionNumber">
                    {{data[questionNumber].answers[0]}} 
                  </ion-label>
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(1)" class="button95 ion-text-none"
                :color="clicked==1 ? 'secondary' : 'primary'"> 
                  <ion-label class="label-padding data-math" :key="questionNumber">
                    {{data[questionNumber].answers[1]}} 
                  </ion-label>
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-button @click="checkAnswer(2)" class="button95 ion-text-none" 
                :color="clicked==2 ? 'secondary' : 'primary'"> 
                  <ion-label class="label-padding data-math" :key="questionNumber">
                    {{data[questionNumber].answers[2]}} 
                  </ion-label>
                </ion-button>
              </ion-col>
            </ion-row>
          </div>

          <div v-else-if="taskType=='yn'">
            <ion-row>
              <ion-col size="6">
                <ion-button @click="checkAnswerTf(0, 0)" class="button95-left" :color="clickedTf1==0 ? 'secondary' : 'primary'">
                  <ion-label class="label-padding">
                    {{data[questionNumber].answers[0]}}
                  </ion-label>
                </ion-button>
              </ion-col>
              <ion-col size="6">
                <ion-button @click="checkAnswerTf(0, 1)" class="button95-right" :color="clickedTf1==1 ? 'secondary' : 'primary'">
                  <ion-label class="label-padding">
                    {{data[questionNumber].answers[1]}}
                  </ion-label>
                </ion-button>
              </ion-col>
            </ion-row>
          </div>

          <div v-else-if="taskType=='prove'"/>

          <ion-row>
            <ion-col>
              <ion-button @click="next" class="button95 margin-top-10"> 
                <ion-label class="label-padding">
                  Następne pytanie 
                </ion-label>
              </ion-button>
            </ion-col>
          </ion-row>
          <div class="offset"/>
        </div>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage, IonButton, IonRow, IonGrid, IonCol, IonLabel, } from "@ionic/vue";
import { renderMathInElement } from "mathlive";
import jsonData from "@/data/data.json";
import store from "@/store/index.js";

export default defineComponent({
  el: "#content",
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
      time: 0,
      taskType: null,
      answersLength: 0,
      firstIndex: 0,
      lastIndex: 0,
      tf: ["Fałsz", "Prawda"],
      isImageVisible: false,
      image: false,
      ab123: ["Tak", "Nie"],
      random: [],
      randomCount: 0,
    };
  },
  methods: {
    checkAnswer(answer) {
      this.clicked = answer;
    },
    checkAnswerTf(num, answer) {
      !num ? this.clickedTf1 = answer : this.clickedTf2 = answer;
    },
    next() {
      this.answersLength = this.answers.length;
      switch(this.taskType){
        case 'abcd':
          if (this.clicked == null) break;
          // do tablicy answers dodaj numer pytania oraz odpowiedź
          this.answers.push([this.questionNumber, this.data[this.questionNumber].answers[this.clicked], null]);
            // zliczenie punktów zdobytych
          if (this.data[this.questionNumber].answers[this.clicked] != this.data[this.questionNumber].correctAnswer) break;
          this.points += this.data[this.questionNumber].points;
          console.log("zdobywasz " + this.data[this.questionNumber].points + " pkt");
          break;
        case 'tf':
          // jeśli została zaznaczona odpowiedź tf
          if (this.clickedTf1 == null && this.clickedTf2 == null) break;
          this.answers.push([this.questionNumber, this.clickedTf1 != null ? this.data[this.questionNumber].correctAnswer[this.clickedTf1] : null, 
                                                  this.clickedTf2 != null ? this.data[this.questionNumber].correctAnswer[this.clickedTf2] : null])
          // zliczenie punktów zdobytych    
          if (this.tf[this.clickedTf1] != this.data[this.questionNumber].correctAnswer[0] ||
              this.tf[this.clickedTf2] != this.data[this.questionNumber].correctAnswer[1]) break;
          this.points += this.data[this.questionNumber].points;
          console.log("zdobywasz " + this.data[this.questionNumber].points + " pkt");
          break;
        case 'abtf':
          // jeśli została zaznaczona odpowiedź ab && cd
          if (this.clickedTf1 == null && this.clickedTf2 == null) break;
          this.answers.push([this.questionNumber, this.clickedTf1 != null ? this.data[this.questionNumber].answers[0][this.clickedTf1 + 1] : null, 
                                                  this.clickedTf2 != null ? this.data[this.questionNumber].answers[1][this.clickedTf2 + 1] : null])
          // zliczenie punktów zdobytych      
          if (this.data[this.questionNumber].answers[0][this.clickedTf1 + 1] != this.data[this.questionNumber].correctAnswer[0] ||
              this.data[this.questionNumber].answers[1][this.clickedTf2 + 1] != this.data[this.questionNumber].correctAnswer[1]) break;
          this.points += this.data[this.questionNumber].points;
          console.log("zdobywasz " + this.data[this.questionNumber].points + " pkt");
          break;
        case 'ab123':
          if (this.clickedTf1 == null && this.clicked == null) break;
          
          this.answers.push([this.questionNumber, this.ab123[this.clickedTf1], this.data[this.questionNumber].answers[this.clicked]]);
          // zliczenie punktów zdobytych
          if (this.ab123[this.clickedTf1] != this.data[this.questionNumber].correctAnswer[0] ||
              this.data[this.questionNumber].answers[this.clicked] != this.data[this.questionNumber].correctAnswer[1]) break;
          this.points += this.data[this.questionNumber].points;
          console.log("zdobywasz " + this.data[this.questionNumber].points + " pkt");
          break;
        case 'yn':
          if (this.clickedTf1 == null) break;
          
          this.answers.push([this.questionNumber, this.data[this.questionNumber].answers[this.clickedTf1], null]);
          // zliczenie punktów zdobytych
          if (this.data[this.questionNumber].answers[this.clickedTf1] != this.data[this.questionNumber].correctAnswer) break;
          this.points += this.data[this.questionNumber].points;
          console.log("zdobywasz " + this.data[this.questionNumber].points + " pkt");
          break;
        case 'prove':
          this.answers.push([this.questionNumber, null, null]);
          // zliczenie punktów zdobytych
          this.points += this.data[this.questionNumber].points;
          console.log("zdobywasz " + this.data[this.questionNumber].points + " pkt");
          break;
      }

      // jeżeli użytkownik nie wybrał odpowiedzi
      if (this.answersLength == this.answers.length){
        this.answers.push([this.questionNumber, null, null]);
      }
      // zliczenie maksymalnych punktów
      this.maxPoints += this.data[this.questionNumber].points;
      // odciśnięcie przycisku
      this.clicked = null; this.clickedTf1 = null; this.clickedTf2 = null;

      switch(store.state.selectedCategory){
        case "losowe pytanie":
          this.randomCount++;
          this.questionNumber = this.random[this.randomCount];
          console.log("pytanie: " + this.questionNumber);
          this.taskType = this.data[this.questionNumber].type;
          this.data[this.questionNumber].image ? this.isImageVisible = true : this.isImageVisible = false;
          this.image = this.data[this.questionNumber].image;
          
          if (this.questionNumber == 308) { // jeśli nie ma już pytań
            store.commit("SET_TIME", Math.round(new Date()) - this.time);
            store.commit("SET_RESULT", { gained: this.points, max: this.maxPoints });
            store.commit("SET_ANSWERS", this.answers);
            this.$router.push({ path: 'summary' })
          }
          break;
        default:
          this.questionNumber++;
          console.log("pytanie: " + this.questionNumber);
          this.taskType = this.data[this.questionNumber].type;
          this.data[this.questionNumber].image ? this.isImageVisible = true : this.isImageVisible = false;
          this.image = this.data[this.questionNumber].image;
          
          if (this.questionNumber > this.lastIndex) { // jeśli nie ma już pytań
            // this.points -= this.data[this.questionNumber].points;
            store.commit("SET_TIME", Math.round(new Date()) - this.time);
            store.commit("SET_RESULT", { gained: this.points, max: this.maxPoints });
            store.commit("SET_ANSWERS", this.answers);
            this.$router.push({ path: 'summary' })
          }
      }
    },
    renderMath() {
      this.$nextTick(function(){
        const elements = document.querySelectorAll(".data-math");
        elements.forEach((element) => {
          renderMathInElement(element, {
            TeX:{
              delimiters: {inline: [ ['$','$'] ] }
            }
          });
        });
      })
    },
    randomUnique(range, count) {
      let nums = new Set();
      while (nums.size < count) {
        nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
      }
      nums.add(308);
      return [...nums];
    }
  },
  ionViewWillEnter() {
    // resetowanie zmiennych
    this.time = 0;
    this.points = 0;
    this.maxPoints = 0;
    this.answers = [];
    this.randomCount = 0;
    // ustawianie zmiennych
    this.time = Math.round(new Date());
    console.log(store.state.selectedCategory);

    switch(store.state.selectedCategory){
      case "losowe pytanie":
        this.random = this.randomUnique(301, store.state.numberOfRandomQuestions);
        console.log(this.random);
        this.firstIndex = this.random[0];
        break;
      default:
        var categoryIndex = (element) => element.category == store.state.selectedCategory;
        this.firstIndex = this.data.findIndex(categoryIndex);
        this.lastIndex = this.data.findLastIndex(categoryIndex);
        console.log(this.firstIndex, this.lastIndex);
    }
    this.questionNumber = this.firstIndex;
    this.taskType = this.data[this.questionNumber].type;

    this.data[this.questionNumber].image ? this.isImageVisible = true : this.isImageVisible = false;
    this.image = this.data[this.questionNumber].image;
  },
  watch: {
    questionNumber() {
      this.renderMath();
    },
  },
  created() {
    this.renderMath();
  }
});
</script>