import { createRoot } from 'react-dom/client';
import Welcome from "./components/Welcome";

import './styles/main.sass'

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<Welcome />);