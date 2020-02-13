<script>
import Textfield from '../../components/Textfield'

import autocompleteCodeSample from './code/Textfield/autocomplete.txt'
import multilineCodeSample from './code/Textfield/multiline.txt'

export default {

  components: {
    Textfield
  },

  data () {
    return {
      value: 'Test',
      emptyValue: '',
      multilineValue: 'Multiline test',
      emailValue: 'foo@bar.com',
      numberValue: 4,
      monthValue: '',

      autocompleteCodeSample,
      multilineCodeSample
    }
  }

}

</script>

<template>
  <div>

    <h1>Textfield</h1>

    <table>
      <tbody>

        <tr>
          <td>
            <code>Textfield</code>
          </td>
          <td colspan="2">
            <textfield :value.sync="value" />
          </td>
        </tr>

        <tr>
          <td>
            With placeholder
          </td>
          <td colspan="2">
            <textfield
              :value.sync="emptyValue"
              placeholder="Fill in value..."
            />
          </td>
        </tr>

        <tr>
          <td>
            Clear button
          </td>
          <td colspan="2">
            <textfield
              :value.sync="value"
              :clear="true"
            />
          </td>
        </tr>

        <tr>
          <td>
            Undo button
          </td>
          <td>
            <textfield
              :value.sync="value"
              :undo="true"
            />
          </td>
          <td>
            <textfield
              :value.sync="value"
              undo="Foo"
            />
          </td>
        </tr>

        <tr>
          <td>
            With an icon
          </td>
          <td colspan="2">
            <textfield
              :value.sync="value"
              :clear="true"
              icon="magnifying-glass"
            />
          </td>
        </tr>

        <tr>
          <td>
            Min and max values
          </td>
          <td>
            <textfield
              :value.sync="value"
              :min="2"
              :max="6"
            />
          </td>
          <td>
            <textfield
              :value.sync="numberValue"
              type="number"
              :min="2"
              :max="6"
            />
          </td>
        </tr>

        <tr>
          <td>
            Render a <code>textarea</code>
            <html-block :source="multilineCodeSample" />
          </td>
          <td colspan="2">
            <textfield
              :value.sync="value"
              :multiline="true"
            />
          </td>
        </tr>

      </tbody>
    </table>

    <h3>Extra features</h3>

    <table>
      <tbody>

        <tr>
          <td>
            <code>autocomplete</code> enables <doc
              href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#inappropriate-for-the-control"
            >browser's autocomplete</doc> feature. Always use the <code>name</code> attribute with this.
            <html-block :source="autocompleteCodeSample" />
          </td>
          <td>
            <textfield
              :value.sync="value"
              :autocomplete="true"
              name="Name"
            />
          </td>
        </tr>

      </tbody>
    </table>

    <h3>Types</h3>

    <p>
      Set <code>type</code> to any <doc
        href="https://www.w3schools.com/tags/att_input_type.asp"
      >HTML input type</doc>. Default is <code>text</code>.
    </p>

    <table>
      <thead>
        <tr>
          <th>number</th>
          <th>email</th>
          <th>month</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>
            <textfield
              :value.sync="numberValue"
              type="number"
            />
            {{ typeof numberValue }}
          </td>
          <td>
            <textfield
              :value.sync="emailValue"
              type="email"
            />
            {{ typeof emailValue }}
          </td>
          <td>
            <textfield
              :value.sync="monthValue"
              type="month"
            />
            <br>{{ monthValue }} ({{ typeof monthValue }})
          </td>
        </tr>

      </tbody>
    </table>

  </div>
</template>
