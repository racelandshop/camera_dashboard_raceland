import{_ as e,c as t,d as a,$ as i,f as s,n as o}from"./main-0443badf.js";import"lit-html/is-server.js";import{u as n}from"./c.603f0acc.js";import"./c.4c3690c6.js";e([o("ha-time-input")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[a()],key:"value",value:void 0},{kind:"field",decorators:[a()],key:"label",value:void 0},{kind:"field",decorators:[a({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[a({type:Boolean,attribute:"enable-second"})],key:"enableSecond",value:()=>!1},{kind:"method",key:"render",value:function(){var e;const t=n(this.locale),a=(null===(e=this.value)||void 0===e?void 0:e.split(":"))||[];let s=a[0];const o=Number(a[0]);return o&&t&&o>12&&o<24&&(s=String(o-12).padStart(2,"0")),t&&0===o&&(s="12"),i`
      <ha-base-time-input
        .label=${this.label}
        .hours=${Number(s)}
        .minutes=${Number(a[1])}
        .seconds=${Number(a[2])}
        .format=${t?12:24}
        .amPm=${t&&(o>=12?"PM":"AM")}
        .disabled=${this.disabled}
        @value-changed=${this._timeChanged}
        .enableSecond=${this.enableSecond}
      ></ha-base-time-input>
    `}},{kind:"method",key:"_timeChanged",value:function(e){e.stopPropagation();const t=e.detail.value,a=n(this.locale);let i=t.hours||0;t&&a&&("PM"===t.amPm&&i<12&&(i+=12),"AM"===t.amPm&&12===i&&(i=0));const o=`${i.toString().padStart(2,"0")}:${t.minutes?t.minutes.toString().padStart(2,"0"):"00"}:${t.seconds?t.seconds.toString().padStart(2,"0"):"00"}`;o!==this.value&&(this.value=o,s(this,"change"),s(this,"value-changed",{value:o}))}}]}}),t);
