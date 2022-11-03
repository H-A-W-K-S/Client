import React from "react";
import { WebView } from 'react-native-webview';
// ^ install using this: npx expo install react-native-webview@11.23.0

const MainPage = ({ navigation }) => {

    let documentHTML = `
    <style>
    .bigBox {
      position: absolute;
      background-color:#EF8B82;
      height: 47vmin;
      width: 47vmin;
      border-radius: 3.2vmin;
      left:2vmin;
      top: calc(((50vmax - (100vmin/4))));
    }

    .bigBoxText{
      position: relative;
      color:black;
      font-size:20vmin;
      left:15vmin;
      top:8.5vmin;
    }
  
    .smallBox {
      position: absolute;
      height: 22.5vmin;
      width: 22.5vmin;
      border-radius: 3.2vmin;
      top: calc(((50vmax - (100vmin/4))));
    }

    .bigImg {
        position: relative;
        width: 20vmin;
        height: 20vmin;
        top: 13.5vmin;
        left: 13.5vmin;
    }

    .smallImg {
        position: relative;
        width: 13vmin;
        height: 13vmin;
        top: 4.75vmin;
        left: 4.75vmin;
    }
  
  
    </style>
    <html>
      <div class=bigBox   onclick='nav("game1")'>
        <img class=bigImg src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAEiElEQVR4nO3dSagcRRjA8Zq8mIiJGIW4hCgaFANGDRIR9xy85PAu4gIevEW8eQyIggeJ4klvbhDw6A4eoxJRokYPcUEQPUTFmBgX1LjELD8PPR1H82Zed1731Czf//qmu76q/5v5uqprSSkIgiAIgiAIgmmj0+TNcHpKaTaltDGltCalNJNS2p9Sei+l9EKn0/m2yfKCLliK+/GL/hzCM1iVO96JAufgnQEN/38O4iEszx372IPTsKtG4/dyAPdhce56jC3dn5SF8ik25a7L2IF1ONKAgJLtWJ+7XmMDHuvTkEewFVfgOjyFwxUlHMU2rM5dv5EHu/s04gNzfHYtXq0oAX7Hw4rH2mAu8GOfxjt3wDU344MaIvbhXpGoT2RAow3s3KGDu7CnhojPMDusuo0F/VqqxvVLFI+hP9cQsRPXtlmvsWGhAnrucxYexV8VJRzD87iojXqNDU0J6LnfJd2GPVZRxCE8gTOarNfY0LSAnvteg7crSoAfsAVLm6jX2NCWgJ77z+LLGiI+x+3meQiYGNoW0C3jFNyD72uIeBfXNxnHSDIMAT1lnalI1H9WlFAm6jVtxDMSDFNAT5kX4Dn1E/WKNuPKQg4BPWVfjbcqSqDotU9Wos4poCeGWXxRQ8RXuNskJOpRENCNo0zU+2uIeB83DjvWRhkVAT3xrFAvUcNruDhXzAti1AT0xHW+4h3E0YoS/u5+fmXu2GsxqgJKsAE7Kn8X+EmRqE/NHXslRl1ACW7BJzVEfG0cEvW4CEgpJSxWJOp9NUTswk25Y+/LOAkowXLFnKQ/aojYjstyx34C4yigBKsVibfqrI4yUZ+dO/bjjLOAElyFNyt/F/hN8Q3Kn6gnQUCJIlF/XEPEN4qcsihn0BMjIKWUsEjx9PNdDREfYmOugCdKQAmWKfoDv9YQsR3rhh3oRAooUSTqbar3qA8rhkKGM+I66QJKsL77H16VHYYx9X5aBJRgk+o96peHEdBUCUgpJcxgM/ZWkHBn28FMnYAS//aoDw4Q8FHbQUytgBKswisDJKxts/CpF5DS8Z+lfsPet813fb6e3ITQ6XSOppSe7fPnC+e7PgS0y7y/CCFggWAmpbS5z5/3tFnw1OeAbhIetPTq0jYLn1oBqj2G7m47iKkToF5H7I62g5kqAeoNRbw4jICmQoD6g3FvYNkwAptoAU5uOHorlgwrwIkUIF7I5EG8ksyHeCmfBzEtJQ9iYlYexNTEPIjJufkQ09PzIBZoZIsrlihliicW6eUQIJap5hMgFmrnESC2KojNOrIzTAFiu5oTGYYAsWFTf9oWILYsG0xbAsSmfdVoWoDYtrIeTQkQG7eeHAsVILYuXhgDGik27x4Givejc3HegGti+/qm0H8WwYNzfDYOcGgaPN6n8Y7gEVyJG8QRJu2Ay1V/6VGFOMSnLniygYaPY6xOFsVYTZ1T9HqJg9yaACvxeo2Gj6MMm0axcmSLwfNuDuFpcZjnf2j6ONulKaVbU0obUkrrUnGc7YGU0s6U0kudTmdvk+UFQRAEQRAEQRCMI/8ALu7FHVgPG+oAAAAASUVORK5CYII='/>
      </div>
      <div class=smallBox onclick='nav("Tutorial")'     style='left: 51vmin;    background-color:#B1DE8C;'>
        <img class=smallImg src='data:image/png;base64,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'/>
      </div>
      <div class=smallBox onclick='nav("leaderboard")'  style='left: 75.5vmin;  background-color:#A8C6FD;'>
        <img class=smallImg src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAABvElEQVR4nO2asS5EQRSGv4NOVCoPQEU0ChG1KCQqXoBaQi2qbXkQ3kFNpVFpPAEaLb9i3Zu7ySbrXnPnWHO+ZJO9k52z/3ybmd2dOxAEQRAEQZAQSceSnpWOZ0lH3uP6EZK2JX0mHHzFp6St1HlnUhcEdgDroa4Bu6mL9iFgvoeavdXuQ8BUMZfpfZ6A85Z9BsBKD1lGyCXgxcxu2nSQdNpXmCbFT4EQ4B3Am1xrQCpWJB107PsBPJrZU7Nx2gTsfT+6IkkDM7uoGkqbAgacS1quGkoTAEMJa9VFiQIAZqsnpQqomTYBV9aSSQWnTUByQoB3AG+KFzDyS1DSAnACrNL4qmjJ+m9D5aQWIGkOuAU2/OLkpzkFNils8DAqYMkthSOxCP7gNa328hgugr1vZqZiogAzO2xTUNIlcNY5UWaKnwIhwDuANyHAO4A3IcA7gDchwDuANyHAO4A3IcA7gDfFC5j4d7jD/fhxewGLHeosjqv9i/MBY6lvHX0Xvk5Z/A9zWB3aKn4KNAW8u6XITz3WpoB74C1/luy8AnfVRS3AzF6BfeCB4YGi/8YHw7Htm1kJH3QQBEEQBBP4AlPh9SsrrQ8LAAAAAElFTkSuQmCC'/>
      </div>
      <div class=smallBox onclick='nav("settings")'     style='left: 51vmin;    background-color:#F8C676; top: calc(24.5vmin + calc(((50vmax - (100vmin/4))))); '>
        <img class=smallImg src='data:image/png;base64,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'/>
      </div>
      <div class=smallBox onclick='nav("About")'        style='left: 75.5vmin;  background-color:#EF8B82; top: calc(24.5vmin + calc(((50vmax - (100vmin/4))))); '>
        <img class=smallImg src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAEAUlEQVR4nO3cv4scZRzH8c9jgolp1EZFBD0koCcIQYwxJzZiITkCRgUvNtbaBC20Mpo/wPwPQlC0NtpYCP7IXWFhY3JJjI0iNrl46Gku8raYXVjWeyYz685+Zma/L0gzmWee7/N82Jm9Z2dGCiGEEEIIIYQQ5klyFzAJYFHSAUl3DTb9Jum7lNIPvqp6DtgLvAlcJG8deAPY4663V4BDwE8lEz/uCvCEu+5eAF4AtmpM/tAWcMxdf6cBjwF/TDD5oyHEJ2ESFOf8OqednB9p8TXhFncBJV6XdH/J/5+TdHrwb7VkvwVJr02xrvlA/tvOVeC5HfY/Amxk2lxwjKGzgEdKTin/mfyRdssl7R6e5Rg6DVjJTOK3FdquZtq+PIva62rrNeDezPavK7T9quYxrdoaQE6VpZNOLa+0NYBfMtuXKrR9quYxwzhgseRieqSk3dGSdg/NcgydR7GwtpMNYHmH/Y8C1zJtzjvG0GkUq5plVoH3gdPA2k32PeEeT+cAeyhWNf+vy8Ct7vF0EtNZjDvoHkenAceYbDn6T+B5d/29ABykWNWs6jLwuLvuXqG4JpwALpRM/PnBPp0553fqr8Yhiu/0ByTdM9j0q4of5WPVM4QQQqgDWAI+BzYn+L6fswl8Bhx2j6/VgJeA7SlO/Lht4EX3OHOsX0OBOyVdkXR7w11tSFpIKW003E9t7h9kltX85EvSHZKyvyM4uQMou+9n2hZm2Fdl7gB297SvytwB5HwoaXeqScUkf2SuvZa2BrCeUvqnbqNBm06tB7U1gLnR1gB2uQuYlVZemCS9ClyXdH1k28+SzqSUMNXUiLYGcJ+kUztsR9KZGdfSKPcpaLPm/vsbqcLIHUCVm217zRpASumcpLPOGtzcnwBJOi7pU3cRLvaLcErpmqRlihuoliTdreIO5yp3QneePYChlNKapDVJAt7VnATQhlPQXIsAzCIAswjALAIwiwDMIgCzCMAsAjCLAMwiALMIwCwCMIsAzCIAM2sAwD7gFHAJuDG8oV/SyQa6OznyzMCNQZ/vAbc10Fdlth9kgH2SvpB0yND9LkkPSnpH0rPAMymlLUMd1k/A2/JM/rgnJb3l6twZwHFj3+NecXXsDOCBCdr8PaV9xtke3nAGUPcG3IuSPq6w3yeSLjVcS/eVPNW42GCf2XfRNdXnzdiekswNevCkS+/6zYk/xMxaFwDQ2Pm4yWNPqjV3xo34APi+oWM/2tBxJ9a6a4DLPF4D6j6c0aTfXR07A2jTwxm5N643znkKOizpS/mvQ9uSnh48LDJztk9ASukbSSsq3mTiclXSimvypRa8NREYvslkv6S9M+r2L0nrks628RU2IYQQQgghhBBCf/0LEop+H6kzVWcAAAAASUVORK5CYII='/>
      </div>
      
      </html>
    <script>
  
    function nav(screen){
        window.ReactNativeWebView.postMessage(screen);
    }

    </script>
  `;

  function onMessage(data) {
    //alert(data.nativeEvent.data);
    navigation.navigate(data.nativeEvent.data);
  }

  return (
    <WebView
    mixedContentMode="compatibility"
    onMessage={onMessage}
    allowFileAccess={true}
    originWhitelist={['*']}
    source={{ html: documentHTML
    }}
  />
  )
}

export default MainPage;

