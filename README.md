#GSS - Gilles Style Sheets

My very own flavor of KSS.

Turns

```sass
//  @section Buttons
//
//  @description
//    A simple button
//
//  @states
//
//  :hover             | Subtle hover highlight.
//  :disabled          - Dims the button to indicate it cannot be used.
//  .small             — A smaller version of the button
//  .medium            , a medium sized button
//  .tiny
//  .large
//  .huge              - A huge button
//
//  @markup
//    <button>
//      Click me!
//    </button>
//

.button {
  padding: 0 18px;

  background: red;
  border-radius: 0.4em;

}

button {
  @extend .button;
  -webkit-appearance: none;
  border: none;
}

.button.medium {
  @extend .button;
}

.button.small {
  padding: 0 12px;
}

```

into

```JSON
{ "description" : [ "A simple button" ],
  "markup" : "<button>\n     Click me!\n   </button>",
  "sections" : [ "Buttons" ],
  "states" : [ { "description" : "Subtle hover highlight.",
        "escaped" : ":hover",
        "name" : ":hover"
      },
      { "description" : "Dims the button to indicate it cannot be used.",
        "escaped" : ":disabled",
        "name" : ":disabled"
      },
      { "description" : "A smaller version of the button",
        "escaped" : "small",
        "name" : ".small"
      },
      { "description" : "a medium sized button",
        "escaped" : "medium",
        "name" : ".medium"
      },
      { "escaped" : "tiny",
        "name" : ".tiny"
      },
      { "escaped" : "large",
        "name" : ".large"
      },
      { "description" : "A huge button",
        "escaped" : "huge",
        "name" : ".huge"
      }
    ]
}
```

## Clone

`git clone git@github.com:gillesdemey/GSS.git`

## Install dependencies

`npm install`

## Run

`node index.js`


