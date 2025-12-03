export const navItems = [
    { id: "home", label: "Home", href: "#home", dropdown: false },
    {
      id: "iso",
      label: "ISO",
      href: ("#iso"),
      dropdown: true,
      dropdownLinks: [
        {
          title: "", 
          items: [
            { label: "ISO 9001", id: "iso-9001", href: "iso?open=9001"},
            { label: "ISO 14001", id: "iso-14001", href: "iso?open=14001" },
            { label: "ISO 45001", id: "iso-45001", href: "iso?open=45001" },
          ]
        },
        {
          title: "",
          items: [
            { label: "ISO 37001", id: "iso-37001", href: "iso?open=37001" },
            { label: "PDR 125", id: "pdr-125", href: "iso?open=PDR125" },
            { label: "ISO 27001", id: "iso-27001", href: "iso?open=27001" },
          ]
        },
        {
          title: "Altro",
          items: [
            { label: "Tutte le certificazioni ISO", id: "all-iso", href: "iso" },
            { label: "Consulenza personalizzata", id: "custom-consulting", href: "#contact" },
          ]
        }
      ],
    },
    {
        id: "security",
        label: "Sicurezza",
        href: "#security",
        dropdown: true,
        dropdownLinks: [
          {
            title: "",
            items: [
                { label:"DVR", id: "dvr", href: "#security?feature=dvr" },
                { label:"Valutazioni specifiche", id: "specific-assessments", href: "#security?feature=specific-assessments" },
                { label:"Planimetria e piano antincendio", id: "fire-plan", href: "#security?feature=fire-plan" },
            ]
          },
          {
            title: "",
            items : [
              { label:"Formazione", id: "training", href: "#security?feature=training" },
              { label:"HACCP", id: "haccp", href: "#security?feature=haccp" },
              { label:"Sopralluoghi", id: "inspections", href: "#security?feature=inspections" },
            ]
          },
          {
            title: "Altro",
            items : [
              { label: "Consulenza personalizzata", id: "custom-consulting", href: "#contact" },
            ]
          }
        ],
    },
    {
        id: "assignment",
        label: "Incarichi",
        href: "#assignment",
        dropdown: true,
        dropdownLinks: [{
          title: "",
          items: [
            { label: "RSPP Esterno", id: "rspp", href: "rspp" },
            { label: "Incarico HSE", id: "hse", href: "hse" },
            { label: "Auditor Esterno", id: "auditor", href: "auditor" },
          ]
        },
        {
          title: "Altro",
          items : [
            { label: "Consulenza personalizzata", id: "custom-consulting", href: "#contact" },
          ]
        }
      ], 
      },
      { id: "article", label: "Articoli", href: "#article", dropdown: false },
      { id: "contact", label: "Contatti", href: "#contact", dropdown: false },
    ];


