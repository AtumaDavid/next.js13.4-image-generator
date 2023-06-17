// import React from "react";

// export default function loading() {
//   return <div>loading...</div>;
// }

import React from "react";
import { Spinner } from "../components/bootstrap";

export default function loading() {
  return <Spinner animation="border" className="d-block m-auto" />;
}
