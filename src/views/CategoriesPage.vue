<template>
  <ion-page>
    <ion-content>
      <ion-grid>
          <ion-row>
            <ion-label class="ct">
              Kategorie
            </ion-label>
          </ion-row>

          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory(1)" class="button90">
                Algebra
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory(2)" class="button90">
                Geometria
              </ion-button>
            </ion-col>
          </ion-row>
          
          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory(3)" class="button90">
                Stereometria
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory(4)" class="button90">
                Liczby i działania
              </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory(5)" class="button90">
                Pierwiastki
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory(6)" class="button90">
                Potęgi
              </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory(7)" class="button90">
                Procenty
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory(8)" class="button90">
                Prawdopodobieństwo
              </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-button @click="setCategory(9)" class="button95">
                Zadania tekstowe
              </ion-button>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-button @click="setCategory(0)" class="button95">
                Losowe pytanie
              </ion-button>
            </ion-col>
          </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonContent,
  IonPage,
  IonButton,
  IonCol,
  IonRow,
  IonLabel,
  IonGrid
} from "@ionic/vue";
import store from "@/store/index.js";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonCol,
    IonRow,
    IonLabel,
    IonGrid
  },
  methods: {
    setCategory(category){
      store.commit("CHANGE_CATEGORY", category);
      this.$router.push({ path: 'task' })
    },
  },

});
</script>
