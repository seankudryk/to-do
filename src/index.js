import "./styles.css"
import { test, createNewEntry, getTodoList, displayEntry } from "./test.js";

test("test");

createNewEntry("idk", "whatever", "i dont care", "none", "naw", "no thanks");
createNewEntry(2, "whatever", "i dont care", "none", "naw", true);
getTodoList();

const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", displayEntry);
