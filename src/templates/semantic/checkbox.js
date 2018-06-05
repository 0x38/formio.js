export default {
  form: `
<div class="ui checkbox">
  <{{input.type}} 
    ref="input" 
    id="{{id}}"
    name="{{input.attr.name}}" 
    type="{{input.attr.type}}" 
    class="{{input.attr.class}}" 
    lang="{{input.attr.lang}}" 
    {% if (input.attr.placeholder) { %}placeholder="{{input.attr.placeholder}}"{% } %}
    {% if (input.attr.tabindex) { %}tabindex="{{input.attr.tabindex}}"{% } %}
    {% if (checked) { %}checked=true{% } %}
    >
  </{{input.type}}>
  <label class="{{input.labelClass}}" for="{{id}}">
    {{input.content}}
    <span>{{input.label}}</span> 
    {% if (component.tooltip) { %}
      <i ref="tooltip" class="glyphicon glyphicon-question-sign text-muted"></i>
    {% } %}
  </label>
</div>
`,
};
