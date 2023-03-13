<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-grid>

        <ion-row>
          <div>Treść zadania</div>
        </ion-row>

        <ion-row>
          <ion-button @click="checkAnswer('a')"> A </ion-button>
        </ion-row>

        <ion-row>
          <ion-button @click="checkAnswer('b')"> B </ion-button>
        </ion-row>

        <ion-row>
          <ion-button @click="checkAnswer('c')"> C </ion-button>
        </ion-row>

        <ion-row>
          <ion-button @click="checkAnswer('d')"> D </ion-button>
        </ion-row>

        <ion-row>
          <ion-button @click="next"> Następne pytanie </ion-button>
        </ion-row>

      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage, IonButton, IonRow, IonGrid } from "@ionic/vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonRow,
    IonGrid
  },
  methods: {
    checkAnswer(answer){
      console.log(answer);
    },
    next(){
      console.log("następne pytanie");
    }
  },
});
</script>
