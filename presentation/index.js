import React from "react";
import pls_han_solo from "../assets/pls_han_solo.gif";
import woho from "../assets/woho.gif";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Magic
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#FF3366"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
         <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            JUnit 4 / Mockito{" "}
            <span
              style={{ fontSize: "1rem", paddingBottom: "1.4rem" }}
              aria-label="hamburger"
              role="img"
            >
              🍔
            </span>
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Norwegian walkthrough by Espen Gudmundsen
          </Text>
        </Slide>
        <Magic>
          <Slide bgColor="primary">
            <Heading size={3} caps textColor="secondary">
              Hvorfor testing?
            </Heading>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={3} caps textColor="secondary">
              3 reasons why
            </Heading>
          </Slide>
        </Magic>
        <Slide bgColor="secondary">
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            <span
              style={{ fontSize: "1rem", paddingBottom: "1.4rem" }}
              aria-label="cheer"
              role="img"
            >
              🙌
            </span>{" "}
            - Koden fungerer som tiltenkt
          </Heading>
          <Text fit textColor="tertiary">
            Funksjonelle tester avdekker sjeldent alle tilfeller.
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            <span
              style={{ fontSize: "1rem", paddingBottom: "1.4rem" }}
              aria-label="spaghetti"
              role="img"
            >
              🍝
            </span>{" "}
            - Reduserer kompleksitet
          </Heading>
          <Text fit textColor="tertiary">
            Bidrar til SOLID (forståelighet, fleksibilitet og enklere
            vedlikehold).
          </Text>
          <Notes>
            ----> Single responsibility principle ----> Open/closed principle
            ("Software entities … should be open for extension, but closed for
            modification.") ----> Liskov substitution principle ("Objects in a
            program should be replaceable with instances of their subtypes
            without altering the correctness of that program.") ----> Interface
            segregation principle ("Many client-specific interfaces are better
            than one general-purpose interface"). ----> Dependency inversion
            principle ("One should "depend upon abstractions, [not]
            concretions.").
          </Notes>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            <span
              style={{ fontSize: "1rem", paddingBottom: "1.4rem" }}
              aria-label="documentation"
              role="img"
            >
              📖
            </span>{" "}
            - Dokumentasjon på forventet oppførsel
          </Heading>
          <Text fit textColor="tertiary">
            Andre utviklere kan se på testene for å forstå koden (fordi @JavaDoc
            brukes ikke)..
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} caps lineHeight={1} textColor="primary">
            Jaja, hørt det før...
          </Heading>
          <img src={pls_han_solo} alt="han solo pls" />
        </Slide>
        <Magic>
          <Slide bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="secondary">
              JUnit 4
            </Heading>
            <Notes>
              Et testrammeverk i Java. Benytter ulike annotasjoner og funksjoner
              for å hjelpe til med testing (assert, expect, @Test).
            </Notes>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} caps textColor="secondary">
              Ikke JUnit 5?
            </Heading>
            <Notes>
              Trøbbel i tårnet for Mockito (med extensions). Virker litt hazzle
              å sette opp per nå.
            </Notes>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} caps textColor="secondary">
              Mockito
            </Heading>
            <Notes>
              Et testrammeverk til Java som gir oss muligheten til å opprette
              "mock" objekter. Mockito bidrar til at vi kan verifisere systemet
              som er under testing. Vi har kontroll på objektene når de er
              "mocket" (eks. vi kan lage egne regler for hva metoder skal
              returnere).
            </Notes>
          </Slide>
        </Magic>
        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            Flere godbiter
          </Heading>
          <List textColor="quartenary">
            <ListItem>Hamcrest</ListItem>
            <ListItem>Mockito Matchers</ListItem>
            <ListItem>PowerMock (dekkes ikke her)</ListItem>
            <ListItem>Arquillian (dekkes ikke her)</ListItem>
          </List>
          <Notes>
            Et testrammeverk til Java som gir oss muligheten til å opprette
            "mock" objekter. Mockito bidrar til at vi kan verifisere systemet
            som er under testing. Vi har kontroll på objektene når de er
            "mocket" (eks. vi kan lage egne regler for hva metoder skal
            returnere).
          </Notes>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Verktøykassen for Dropwizard integrasjonstester
          </Heading>
          <List textColor="quartenary">
            <ListItem>JUnit 4</ListItem>
            <ListItem>Hamcrest</ListItem>
            <ListItem>GSON</ListItem>
            <ListItem>Dropwizard-testing</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary" italic>
              Let's demo!
          </Heading>
          <img src={woho} alt="woho!" />
        </Slide>

        <CodeSlide
            transition={["fade"]}
            lang="java"
            textSize=".6em"
            bgColor="secondary"
            code={require("raw-loader!./yoo")}
            ranges={[
              { loc: [0, 18], title: "1 + 1 = 2." },
              { loc: [2, 4], note: "Importerer et par JUnit-verktøy." },
              { loc: [7, 8], note: "Annotér med @Test for å gjøre testen kjørbar. Alle tester må være scoped public." },
              { loc: [8, 16], note: "En simpel test -> The old 'Prepare', 'Execute', 'Assert' pattern." },
              { loc: [10, 11], note: "Prepare: int i = 1." },
              { loc: [12, 13], note: "Execute: Legg sammen to 'i', og returner om dette ble 2." },
              { loc: [14, 15], note: "Assert: At svaret equals -> true." },
            ]} />
      </Deck>
    );
  }
}
