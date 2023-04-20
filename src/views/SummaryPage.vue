<template>
  <ion-page>
    <ion-content>
      <ion-grid >
        <div class="center">
          <ion-row>
            <ion-label class="ct">
              Podsumowanie
            </ion-label>
          </ion-row>

          <ion-row class="container" style="margin-top: calc(5px + 1%);">
            <ion-label>
              Zdobyte punkty: {{ points[0] || "0" }} / {{ points[1] || "0" }}
            </ion-label>
          </ion-row>

          <ion-row class="container">
            <ion-col>
              <ion-label style="white-space: pre-wrap;">
                Czas:<br/> 
              </ion-label>
              <div v-if="time">
                {{ time }}
              </div>
            </ion-col>
          </ion-row>
          <!-- treść pytania -->
          <ion-row class="container">
            <ion-label class="label-padding data-math" style="white-space: pre-wrap;" type="mode=text" :key="questionNumber">
              {{ data[answers[questionNumber][0]].content }}
            </ion-label>
          </ion-row>

          <div v-if="taskType=='abcd' || taskType=='yn'">
            <ion-row class="row-offset-95"> 
              <!-- pdpowiedź użytkownika -->
              <ion-col class="container-half">
                <ion-label style="white-space: pre-wrap;">
                  Twoja<br/>odpowiedź:<br/> 
                </ion-label>
                <div v-if="answers">
                <ion-label class="label-padding data-math" :key="questionNumber">
                  {{ answers[questionNumber][1] }}
                </ion-label>
                </div>
              </ion-col>
              <ion-col class="narrow" size="0"/>
              <!-- poprawna odpowiedź -->
              <ion-col class="container-half">
                <ion-label style="white-space: pre-wrap;">
                  Poprawna<br/>odpowiedź:<br/>
                </ion-label>
                <ion-label class="label-padding data-math" :key="questionNumber">
                  {{ data[answers[questionNumber][0]].correctAnswer }}
                </ion-label>
              </ion-col>
            </ion-row>
          </div>

          <div v-else-if="taskType=='tf'">
            <!-- pierwsze pytanie tf -->
            <ion-row class="container">
              <ion-label class="label-padding data-math" :key="questionNumber">
                {{ data[answers[questionNumber][0]].answers[0] }}
              </ion-label>
            </ion-row>
            <!-- pierwsza odpowiedź -->
            <ion-row class="row-offset-95">
              <ion-col class="container-half" >
                <ion-label style="white-space: pre-wrap;">
                  Twoja<br/>odpowiedź:<br/> 
                </ion-label>
                <div v-if="answers">
                <ion-label class="label-padding data-math" :key="questionNumber">
                  {{ answers[questionNumber][1] }}
                </ion-label>
                </div>
              </ion-col>
              <ion-col class="narrow" size="0"/>
              <ion-col class="container-half">
                <ion-label style="white-space: pre-wrap;">
                  Poprawna<br/>odpowiedź:<br/>
                </ion-label>
                <ion-label class="label-padding data-math" :key="questionNumber">
                  {{ data[answers[questionNumber][0]].correctAnswer[0] }}
                </ion-label>
              </ion-col>
            </ion-row>
            <!-- drugie pytanie tf -->
            <ion-row  class="container">
              <ion-label class="label-padding data-math" :key="questionNumber">
                {{ data[answers[questionNumber][0]].answers[1] }}
              </ion-label>
            </ion-row>
            <!-- druga odpowiedź -->
            <ion-row class="row-offset-95">
              <ion-col class="container-half">
                <ion-label style="white-space: pre-wrap;">
                  Twoja<br/>odpowiedź:<br/> 
                </ion-label>
                <div v-if="answers">
                <ion-label class="label-padding data-math" :key="questionNumber">
                  {{ answers[questionNumber][2] }}
                </ion-label>
                </div>
              </ion-col>
              <ion-col class="narrow" size="0"/>
              <ion-col class="container-half">
                <ion-label style="white-space: pre-wrap;">
                  Poprawna<br/>odpowiedź:<br/>
                </ion-label>
                <ion-label class="label-padding data-math" :key="questionNumber">
                  {{ data[answers[questionNumber][0]].correctAnswer[1] }}
                </ion-label>
              </ion-col>
            </ion-row>
          </div>

          <div v-else-if="taskType=='ab123'">
            <ion-row class="row-offset-95">
              <!-- pdpowiedź użytkownika -->
              <ion-col class="container-half">
                <ion-label style="white-space: pre-wrap;">
                  Twoja<br/>odpowiedź:<br/> 
                </ion-label>
                <div v-if="answers">
                <ion-label class="label-padding data-math" :key="questionNumber">
                  {{ answers[questionNumber][1] }}, {{ answers[questionNumber][2] }}
                </ion-label>
                </div>
              </ion-col>
              <ion-col class="narrow" size="0"/>
              <!-- poprawna odpowiedź -->
              <ion-col class="container-half">
                <ion-label style="white-space: pre-wrap;">
                  Poprawna<br/>odpowiedź:<br/>
                </ion-label>
                <ion-label class="label-padding data-math" :key="questionNumber">
                  {{ data[answers[questionNumber][0]].correctAnswer[0] }}, {{ data[answers[questionNumber][0]].correctAnswer[1] }}
                </ion-label>
              </ion-col>
            </ion-row>
          </div>

          <div v-else-if="taskType=='abtf'">
            <!-- pierwsze pytanie abtf -->
            <ion-row class="container">
              <ion-label class="label-padding data-math" :key="questionNumber">
                {{ data[answers[questionNumber][0]].answers[0][0] }}
              </ion-label>
            </ion-row>
            <!-- pierwsza odpowiedź -->
            <ion-row class="row-offset-95">
              <ion-col class="container-half">
                <ion-label style="white-space: pre-wrap;">
                  Twoja<br/>odpowiedź:<br/> 
                </ion-label>
                <div v-if="answers">
                <ion-label class="label-padding data-math" :key="questionNumber">
                  {{ answers[questionNumber][1] }}
                </ion-label>
                </div>
              </ion-col>
              <ion-col class="narrow" size="0"/>
              <ion-col class="container-half">
                <ion-label style="white-space: pre-wrap;">
                  Poprawna<br/>odpowiedź:<br/>
                </ion-label>
                <ion-label class="label-padding data-math" :key="questionNumber">
                  {{ data[answers[questionNumber][0]].correctAnswer[0] }}
                </ion-label>
              </ion-col>
            </ion-row>
            <!-- drugie pytanie abtf -->
            <ion-row  class="container">
              <ion-label class="label-padding data-math" :key="questionNumber">
                {{ data[answers[questionNumber][0]].answers[1][0] }}
              </ion-label>
            </ion-row>
            <!-- druga odpowiedź -->
            <ion-row class="row-offset-95">
              <ion-col class="container-half">
                <ion-label style="white-space: pre-wrap;">
                  Twoja<br/>odpowiedź:<br/> 
                </ion-label>
                <div v-if="answers">
                <ion-label class="label-padding data-math" :key="questionNumber">
                  {{ answers[questionNumber][2] }}
                </ion-label>
                </div>
              </ion-col>
              <ion-col class="narrow" size="0"/>
              <ion-col class="container-half">
                <ion-label style="white-space: pre-wrap;">
                  Poprawna<br/>odpowiedź:<br/>
                </ion-label>
                <ion-label class="label-padding data-math" :key="questionNumber">
                  {{ data[answers[questionNumber][0]].correctAnswer[1] }}
                </ion-label>
              </ion-col>
            </ion-row>
          </div>

          <div v-else-if="taskType=='prove'"/>

          <ion-row>
            <ion-col size="6">
              <ion-button @click="previous" class="button95-left">
                <ion-label class="label-padding">
                  Poprzednie
                </ion-label>
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="next" class="button95-right">
                <ion-label class="label-padding">
                  Następne
                </ion-label>
              </ion-button>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="12">
              <ion-button @click="backToCategories" class="button95">
                <ion-label class="label-padding">
                  Kategorie
                </ion-label>
              </ion-button>
            </ion-col>
          </ion-row>
        </div>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage, IonLabel, IonGrid, IonRow, IonCol, IonButton } from "@ionic/vue";
import { renderMathInElement } from "mathlive";
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
      taskType: "abcd"
    }
  },
  methods: {
    previous() {
      if (this.questionNumber > 0) this.questionNumber--;
      else this.questionNumber = this.answersLength;
      this.taskType = this.data[this.answers[this.questionNumber][0]].type;
      console.log(this.taskType)
    },
    next() {
      if (this.questionNumber < this.answersLength) this.questionNumber++;
      else this.questionNumber = 0;
      this.taskType = this.data[this.answers[this.questionNumber][0]].type;
      console.log(this.taskType)
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
    backToCategories() {
      this.$router.replace({ path: 'categories' });
      // this.$router.push({ path: 'categories' });
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
    this.renderMath();
    this.points = store.state.points;
    this.answers = store.state.answers;
    console.log(this.answers)
    this.answersLength = this.answers.length - 1;
    this.time = this.msToMinutesAndSeconds(store.state.time);
    this.taskType = this.data[this.answers[0][0]].type;
    console.log(this.time)
  },
  watch: {
    questionNumber() {
      this.renderMath();
    }
  },
  
});
</script>
