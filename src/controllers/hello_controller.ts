import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name" ]
  readonly nameTarget!: HTMLInputElement

  greet() {
    const element = this.nameTarget
    const name = element.value
    console.log(`Hello, ${name}!`)
  }
}
