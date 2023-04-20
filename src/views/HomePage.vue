<template>
  <ion-page>
    <ion-content class="ion-padding">
        <div class="center">
          <ion-row>
            <div style="width:100%; margin-left: 10%; margin-right: 10%;">
              <ion-img :src="image" alt="Logo aplikacji E8 Matematyka"/>
            </div>
          </ion-row>
          <ion-row>
            <ion-button @click="selectCategory" class="button95 margin-top-10" style="font-size: large">
              <ion-label class="label-padding">
                Kategorie
              </ion-label>
            </ion-button>
          </ion-row>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonContent, 
  IonPage,
  IonButton,
  IonRow,
  IonImg,
  IonLabel
} from "@ionic/vue";

import image from "@/assets/logo.svg"

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonRow,
    IonImg,
    IonLabel
  },
  data: function(){
    return {
      image: image,
    }
  },
  methods: {
    selectCategory() {
      this.$router.push({ path: 'categories' })
    },
  },
});
</script>