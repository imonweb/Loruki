import "../src/css/styles.css";

// import "font-awesome/css/font-awesome.css";
// import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab) 

dom.i2svg()

// library.add(faCheck);
dom.watch();