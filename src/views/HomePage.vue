<template>
  <ion-page>
    <ion-content class="ion-padding">
        <div class="center">
          <ion-row>
            <div style="width:100%">
              <ion-img src="../../assets/e8-removebg.png" alt="Logo aplikacji E8 Matematyka">
              </ion-img>
            </div>
          </ion-row>
          <ion-row>
            <ion-button @click="selectCategory" class="button95 margin-top-10" style="font-size: large">
              Kategorie
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
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonRow,
    IonImg,
  },
  methods: {
    selectCategory() {
      this.$router.push({ path: 'categories' })
    },
  },

});
</script>
