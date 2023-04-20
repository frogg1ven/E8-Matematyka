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
              <ion-button @click="setCategory('algebra')" class="button95-left-c">
                <div class="custom-button-content" style="padding: calc(1% + 5px) 0 0 0;">
                  <img src="@/assets/categories/algebra.svg" alt="algebra.svg" style="width: 20vh;"/>
                  <ion-label class="label-padding" style="padding-top: calc(1% + 5px);">
                    Algebra
                  </ion-label>
                </div>
                
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory('geometria')" class="button95-right-c">
                <div class="custom-button-content" style="padding: calc(1% + 5px) 0 0 0;">
                  <img src="@/assets/categories/geometria.svg" alt="geometria.svg" style="width: 20vh;"/>
                  <ion-label class="label-padding" style="padding-top: calc(1% + 5px);">
                    Geometria
                  </ion-label>
                </div>
              </ion-button>
            </ion-col>
          </ion-row>
          
          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory('stereometria')" class="button95-left-c">
                <div class="custom-button-content" style="padding: calc(1% + 5px) 0 0 0;">
                  <img src="@/assets/categories/stereometria.svg" alt="stereometria.svg" style="width: 20vh;"/>
                  <ion-label class="label-padding" style="padding-top: calc(1% + 5px);">
                    Stereometria
                  </ion-label>
                </div>
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory('liczby i działania')" class="button95-right-c">
                <div class="custom-button-content" style="padding: calc(1% + 5px) 0 0 0;">
                  <img src="@/assets/categories/liczbyidzialania.svg" alt="liczby i działania.svg" style="width: 20vh;"/>
                  <ion-label class="label-padding" style="padding-top: calc(1% + 5px);">
                    Liczby i działania
                  </ion-label>
                </div>
              </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory('pierwiastki')" class="button95-left-c">
                <div class="custom-button-content" style="padding: calc(1% + 5px) 0 0 0;">
                  <img src="@/assets/categories/pierwiastki.svg" alt="pierwiastki.svg" style="width: 20vh;"/>
                  <ion-label class="label-padding" style="padding-top: calc(1% + 5px);">
                    Pierwiastki
                  </ion-label>
                </div>
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory('potęgi')" class="button95-right-c">
                <div class="custom-button-content" style="padding: calc(1% + 5px) 0 0 0;">
                  <img src="@/assets/categories/potegi.svg" alt="potęgi.svg" style="width: 20vh;"/>
                  <ion-label class="label-padding" style="padding-top: calc(1% + 5px);">
                    Potęgi
                  </ion-label>
                </div>
              </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory('procenty')" class="button95-left-c">
                <div class="custom-button-content" style="padding: calc(1% + 5px) 0 0 0;">
                  <img src="@/assets/categories/procenty.svg" alt="procenty.svg" style="width: 20vh;"/>
                  <ion-label class="label-padding" style="padding-top: calc(1% + 5px);">
                    Procenty
                  </ion-label>
                </div>
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setCategory('prawdopodobieństwo')" class="button95-right-c">
                <div class="custom-button-content" style="padding: calc(1% + 5px) 0 0 0; width: 100%">
                  <img src="@/assets/categories/prawdopodobienstwo.svg" alt="prawdopodobieństwo.svg" style="width: 20vh;"/>
                  <ion-label class="label-padding" style="padding-top: calc(1% + 5px);">
                    Prawdopodobieństwo
                  </ion-label>
                </div>
              </ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="6">
              <ion-button @click="setCategory('zadania tekstowe')" class="button95-left-c">
                <div class="custom-button-content" style="padding: calc(1% + 5px) 0 0 0; width: 100%">
                  <img src="@/assets/categories/zadaniatekstowe.svg" alt="zadaniatekstowe.svg" style="width: 20vh;"/>
                  <ion-label class="label-padding" style="padding-top: calc(1% + 5px);">
                    Zadania tekstowe
                  </ion-label>
                </div>
              </ion-button>
            </ion-col>
            <ion-col size="6">
              <ion-button @click="setOpenProve(true)" class="button95-right-c">
                <ion-alert
                  :is-open="isOpenProve"
                  trigger="present-alert"
                  header="Zadania dowodowe nie są punkotowane!"
                  message="W podsumowaniu zostanie wyświetlona maksymalna liczba punktów."
                  :buttons="proveButton"
                  @didDismiss="setOpenProve(false)"
                ></ion-alert>
                <div class="custom-button-content" style="padding: calc(1% + 5px) 0 0 0; width: 100%">
                  <img src="@/assets/categories/udowodnij.svg" alt="udowodnij.svg" style="width: 20vh;"/>
                  <ion-label class="label-padding" style="padding-top: calc(1% + 5px);">
                   Udowodnij
                  </ion-label>
                </div>
              </ion-button>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-button @click="setOpenRandom(true)" class="button95-c">
                  <ion-alert
                    class="custom-alert"
                    :is-open="isOpenRandom"
                    trigger="present-alert"
                    header="Losowanie pytań"
                    message="Podaj liczbę od 1 do 301. Na podstawie wprowadzonej wartości zostanie wylosowana ilość zadań do rozwiązania (pytania dowodowe nie będą losowane)."
                    :buttons="randomButton"
                    :inputs="alertInputs"
                    @didDismiss="setOpenRandom(false)"
                  ></ion-alert>
                  <ion-label class="label-padding">
                    Losowe pytanie
                  </ion-label>
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
  IonGrid,
  IonAlert,
} from "@ionic/vue";
import store from "@/store/index.js";
import { ref } from 'vue';
import router from "@/router";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonCol,
    IonRow,
    IonLabel,
    IonGrid,
    IonAlert,
  },
  setup() {
    const isOpenProve = ref(false);
    const isOpenRandom = ref(false);
    const proveButton = ["OK"];
    const randomButton = [
      {
        text: 'OK',
        handler: (data) => {
          if (data[0] == '') store.commit("SET_NUMBER_OF_RANDOM_QUESTIONS", 10);
          else if (data[0] > 301) store.commit("SET_NUMBER_OF_RANDOM_QUESTIONS", 301);
          else if (data[0] < 1) store.commit("SET_NUMBER_OF_RANDOM_QUESTIONS", 1);
          else store.commit("SET_NUMBER_OF_RANDOM_QUESTIONS", data[0]);
        },
      }
    ];
    const alertInputs = [
        {
          type: 'number',
          placeholder: 'Liczba pytań',
          min: 1,
          max: 301,
        },
      ];
    const setOpenProve = (state) => {
      isOpenProve.value = state;
      if(!isOpenProve.value){
        store.commit("CHANGE_CATEGORY", 'udowodnij');
        router.push({ path: 'task' })
      } 
    };
    const setOpenRandom = (state) => {
      isOpenRandom.value = state;
      if(!isOpenRandom.value){
        store.commit("CHANGE_CATEGORY", 'losowe pytanie');
        router.push({ path: 'task' })
      } 
    };
    return { isOpenProve, isOpenRandom, proveButton, randomButton, alertInputs, setOpenProve, setOpenRandom };
  },
  methods: {
    setCategory(category){
      store.commit("SET_RESULT", []);
      store.commit("SET_ANSWERS", [['-','-','-']]);
      store.commit("SET_TIME", 0);
      store.commit("CHANGE_CATEGORY", category);
      this.$router.push({ path: 'task' });
    },
  },
});
</script>