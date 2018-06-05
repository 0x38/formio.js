export default {
  form: `
<fieldset id="{{id}}" class="{{className}}">
  {% if (component.legend) { %}<legend>{{t(component.legend)}}</legend>{% } %}
  <div class="card-body" ref="fieldset">
    {{children}}
  </div>
</fieldset>
`,
};
