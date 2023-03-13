<template>
  <ion-page>
    <ion-content class="ion-padding">
        <div>
          <ion-row>
            <div>
              Logo aplikacji
              E8 Matematyka
            </div>
          </ion-row>
          <ion-row>
            <ion-button @click="selectCategory">
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
  IonRow
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonRow
  },
  methods: {
    selectCategory() {
      this.$router.push({ path: 'categories' })
    },
  },

});
</script>
