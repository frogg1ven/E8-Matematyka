<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div>
        <ion-grid>

          <ion-row>
            <div>
              Kategorie
            </div>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-button>
                Algebra
              </ion-button>
            </ion-col>
            <ion-col>
              <ion-button>
                Geometria
              </ion-button>
            </ion-col>
          </ion-row>
          
          <ion-row>
            <ion-col>
              <ion-button>
                Stereometria
              </ion-button>
            </ion-col>
            <ion-col>
              <ion-button>
                Liczby i działania
              </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-button>
                Pierwiastki
              </ion-button>
            </ion-col>
            <ion-col>
              <ion-button>
                Potęgi
              </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-button>
                Procenty
              </ion-button>
            </ion-col>
            <ion-col>
              <ion-button>
                Prawdopodobieństwo
              </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-button>
                Zadania tekstowe
              </ion-button>
            </ion-col>
            <ion-col>
              <ion-button>
                Losowe pytanie
              </ion-button>
            </ion-col>
          </ion-row>

        </ion-grid>
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
  IonGrid,
  IonCol,
  IonRow
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonGrid,
    IonCol,
    IonRow
  },

});
</script>
