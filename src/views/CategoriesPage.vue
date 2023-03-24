<template>
  <ion-page>
    <ion-content>
      <ion-grid class="center" style="width: 100%">
          <ion-row>
            <ion-label class="ct">
              Kategorie
            </ion-label>
          </ion-row>

          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory('algebra')" class="button95-left">
                Algebra
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory('geometria')" class="button95-right">
                Geometria
              </ion-button>
            </ion-col>
          </ion-row>
          
          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory('stereometria')" class="button95-left">
                Stereometria
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory('liczby i działania')" class="button95-right">
                Liczby i działania
              </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory('pierwiastki')" class="button95-left">
                Pierwiastki
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory('potęgi')" class="button95-right">
                Potęgi
              </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory('procenty')" class="button95-left">
                Procenty
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory('prawdopodobieństwo')" class="button95-right">
                Prawdopodobieństwo
              </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory('zadania tekstowe')" class="button95-left">
                Zadania tekstowe
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory('udowodnij')" class="button95-right">
                Udowodnij
              </ion-button>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-button @click="setCategory('losowe pytanie')" class="button95">
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
