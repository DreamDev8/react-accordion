import React from "react";
import Accordion from "./Accordion";
import questionsInfo from "../questions";

function App() {
    return (
        <div>
            <main>
                <div className="container-all">
                    <section className="heading">
                        <h1>Questions and Answers About Login</h1>
                    </section>
                    <section>
                        {questionsInfo.map((questionItem) => (
                            <Accordion title={questionItem.title} info={questionItem.info} />
                        ))}
                    </section>
                </div>
            </main>
            <footer>
                <h3 className="footer-h3">Challenge by Coding Addict. Coded by DreamDev.</h3>
            </footer>
        </div>
    );
}

export default App;
