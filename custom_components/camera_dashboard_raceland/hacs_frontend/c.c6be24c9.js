import{x as e,o as t,eQ as a,ah as i,g as r,H as o,L as n,d as s,y as l,_ as d,t as c,f as h,ax as p,q as u}from"./main-b570e60a.js";import{d as y}from"./c.4d0662f5.js";import{c as m}from"./c.bc207e00.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";const f=Intl&&Intl.DateTimeFormat,b=[38,33,36],_=[40,34,35],v=new Set([37,...b]),w=new Set([39,..._]),g=new Set([39,...b]),k=new Set([37,..._]),D=new Set([37,39,...b,..._]);function x(e,t,a){return new Date(Date.UTC(e,t,a))}const T=e`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>`,C=e`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>`,S=t`
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  background: none; /** NOTE: IE11 fix */
  color: inherit;
  border: none;
  font: inherit;
  text-align: left;
  text-transform: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`;t`
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  position: relative;
  display: inline-block;
  background: initial;
  color: inherit;
  font: inherit;
  text-transform: inherit;
  text-decoration: none;
  outline: none;
}
a:focus,
a:focus.page-selected {
  text-decoration: underline;
}
`,t`
svg {
  display: block;
  min-width: var(--svg-icon-min-width, 24px);
  min-height: var(--svg-icon-min-height, 24px);
  fill: var(--svg-icon-fill, currentColor);
  pointer-events: none;
}
`,t`[hidden] { display: none !important; }`;const $=t`
:host {
  display: block;

  /* --app-datepicker-width: 300px; */
  /* --app-datepicker-primary-color: #4285f4; */
  /* --app-datepicker-header-height: 80px; */
}

* {
  box-sizing: border-box;
}
`;function F(e,t){return+t-+e}function U({hasAltKey:e,keyCode:t,focusedDate:a,selectedDate:i,disabledDaysSet:r,disabledDatesSet:o,minTime:n,maxTime:s}){const l=a.getUTCFullYear(),d=a.getUTCMonth(),c=a.getUTCDate(),h=+a,p=i.getUTCFullYear(),u=i.getUTCMonth();let y=l,m=d,f=c,b=!0;switch((u!==d||p!==l)&&(y=p,m=u,f=1,b=34===t||33===t||35===t),b){case h===n&&v.has(t):case h===s&&w.has(t):break;case 38===t:f-=7;break;case 40===t:f+=7;break;case 37===t:f-=1;break;case 39===t:f+=1;break;case 34===t:e?y+=1:m+=1;break;case 33===t:e?y-=1:m-=1;break;case 35===t:m+=1,f=0;break;default:f=1}if(34===t||33===t){const e=x(y,m+1,0).getUTCDate();f>e&&(f=e)}const _=function({keyCode:e,disabledDaysSet:t,disabledDatesSet:a,focusedDate:i,maxTime:r,minTime:o}){const n=+i;let s=n<o,l=n>r;if(F(o,r)<864e5)return i;let d=s||l||t.has(i.getUTCDay())||a.has(n);if(!d)return i;let c=0,h=s===l?i:new Date(s?o-864e5:864e5+r);const p=h.getUTCFullYear(),u=h.getUTCMonth();let y=h.getUTCDate();for(;d;)(s||!l&&g.has(e))&&(y+=1),(l||!s&&k.has(e))&&(y-=1),h=x(p,u,y),c=+h,s||(s=c<o,s&&(h=new Date(o),c=+h,y=h.getUTCDate())),l||(l=c>r,l&&(h=new Date(r),c=+h,y=h.getUTCDate())),d=t.has(h.getUTCDay())||a.has(c);return h}({keyCode:t,maxTime:s,minTime:n,disabledDaysSet:r,disabledDatesSet:o,focusedDate:x(y,m,f)});return _}function N(e,t,a){return e.dispatchEvent(new CustomEvent(t,{detail:a,bubbles:!0,composed:!0}))}function L(e,t){return e.composedPath().find((e=>e instanceof HTMLElement&&t(e)))}function E(e){return t=>e.format(t).replace(/\u200e/gi,"")}function M(e){const t=f(e,{timeZone:"UTC",weekday:"short",month:"short",day:"numeric"}),a=f(e,{timeZone:"UTC",day:"numeric"}),i=f(e,{timeZone:"UTC",year:"numeric",month:"short",day:"numeric"}),r=f(e,{timeZone:"UTC",year:"numeric",month:"long"}),o=f(e,{timeZone:"UTC",weekday:"long"}),n=f(e,{timeZone:"UTC",weekday:"narrow"}),s=f(e,{timeZone:"UTC",year:"numeric"});return{locale:e,dateFormat:E(t),dayFormat:E(a),fullDateFormat:E(i),longMonthYearFormat:E(r),longWeekdayFormat:E(o),narrowWeekdayFormat:E(n),yearFormat:E(s)}}function W(e,t){const a=function(e,t){const a=t.getUTCFullYear(),i=t.getUTCMonth(),r=t.getUTCDate(),o=t.getUTCDay();let n=o;return"first-4-day-week"===e&&(n=3),"first-day-of-year"===e&&(n=6),"first-full-week"===e&&(n=0),x(a,i,r-o+n)}(e,t),i=x(a.getUTCFullYear(),0,1),r=1+(+a-+i)/864e5;return Math.ceil(r/7)}function Y(e){if(e>=0&&e<7)return Math.abs(e);return((e<0?7*Math.ceil(Math.abs(e)):0)+e)%7}function V(e,t,a){const i=Y(e-t);return a?1+i:i}function O(e){const{dayFormat:t,fullDateFormat:a,locale:i,longWeekdayFormat:r,narrowWeekdayFormat:o,selectedDate:n,disabledDates:s,disabledDays:l,firstDayOfWeek:d,max:c,min:h,showWeekNumber:p,weekLabel:u,weekNumberType:y}=e,m=null==h?Number.MIN_SAFE_INTEGER:+h,f=null==c?Number.MAX_SAFE_INTEGER:+c,b=function(e){const{firstDayOfWeek:t=0,showWeekNumber:a=!1,weekLabel:i,longWeekdayFormat:r,narrowWeekdayFormat:o}=e||{},n=1+(t+(t<0?7:0))%7,s=i||"Wk",l=a?[{label:"Wk"===s?"Week":s,value:s}]:[],d=Array.from(Array(7)).reduce(((e,t,a)=>{const i=x(2017,0,n+a);return e.push({label:r(i),value:o(i)}),e}),l);return d}({longWeekdayFormat:r,narrowWeekdayFormat:o,firstDayOfWeek:d,showWeekNumber:p,weekLabel:u}),_=e=>[i,e.toJSON(),null==s?void 0:s.join("_"),null==l?void 0:l.join("_"),d,null==c?void 0:c.toJSON(),null==h?void 0:h.toJSON(),p,u,y].filter(Boolean).join(":"),v=n.getUTCFullYear(),w=n.getUTCMonth(),g=[-1,0,1].map((e=>{const r=x(v,w+e,1),o=+x(v,w+e+1,0),n=_(r);if(o<m||+r>f)return{key:n,calendar:[],disabledDatesSet:new Set,disabledDaysSet:new Set};const b=function(e){const{date:t,dayFormat:a,disabledDates:i=[],disabledDays:r=[],firstDayOfWeek:o=0,fullDateFormat:n,locale:s="en-US",max:l,min:d,showWeekNumber:c=!1,weekLabel:h="Week",weekNumberType:p="first-4-day-week"}=e||{},u=Y(o),y=t.getUTCFullYear(),m=t.getUTCMonth(),f=x(y,m,1),b=new Set(r.map((e=>V(e,u,c)))),_=new Set(i.map((e=>+e))),v=[f.toJSON(),u,s,null==l?"":l.toJSON(),null==d?"":d.toJSON(),Array.from(b).join(","),Array.from(_).join(","),p].filter(Boolean).join(":"),w=V(f.getUTCDay(),u,c),g=null==d?+new Date("2000-01-01"):+d,k=null==l?+new Date("2100-12-31"):+l,D=c?8:7,T=x(y,1+m,0).getUTCDate(),C=[];let S=[],$=!1,F=1;for(const e of[0,1,2,3,4,5]){for(const t of[0,1,2,3,4,5,6].concat(7===D?[]:[7])){const i=t+e*D;if(!$&&c&&0===t){const t=W(p,x(y,m,F-(e<1?u:0))),a=`${h} ${t}`;S.push({fullDate:null,label:a,value:`${t}`,key:`${v}:${a}`,disabled:!0});continue}if($||i<w){S.push({fullDate:null,label:"",value:"",key:`${v}:${i}`,disabled:!0});continue}const r=x(y,m,F),o=+r,s=b.has(t)||_.has(o)||o<g||o>k;s&&_.add(o),S.push({fullDate:r,label:n(r),value:a(r),key:`${v}:${r.toJSON()}`,disabled:s}),F+=1,F>T&&($=!0)}C.push(S),S=[]}return{disabledDatesSet:_,calendar:C,disabledDaysSet:new Set(r.map((e=>Y(e)))),key:v}}({dayFormat:t,fullDateFormat:a,locale:i,disabledDates:s,disabledDays:l,firstDayOfWeek:d,max:c,min:h,showWeekNumber:p,weekLabel:u,weekNumberType:y,date:r});return{...b,key:n}})),k=[],D=new Set,T=new Set;for(const e of g){const{disabledDatesSet:t,disabledDaysSet:a,...i}=e;if(i.calendar.length>0){if(a.size>0)for(const e of a)T.add(e);if(t.size>0)for(const e of t)D.add(e)}k.push(i)}return{calendars:k,weekdays:b,disabledDatesSet:D,disabledDaysSet:T,key:_(n)}}function A(e){const t=null==e?new Date:new Date(e),a="string"==typeof e&&(/^\d{4}-\d{2}-\d{2}$/i.test(e)||/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(Z|\+00:00|-00:00)$/i.test(e)),i="number"==typeof e&&e>0&&isFinite(e);let r=t.getFullYear(),o=t.getMonth(),n=t.getDate();return(a||i)&&(r=t.getUTCFullYear(),o=t.getUTCMonth(),n=t.getUTCDate()),x(r,o,n)}function P(e,t){return e.classList.contains(t)}function j(e,t){return!(null==e||!(t instanceof Date)||isNaN(+t))}function I(e){return e-Math.floor(e)>0?+e.toFixed(3):e}function z(e){return{passive:!0,handleEvent:e}}function K(e,t){const a="string"==typeof e&&e.length>0?e.split(/,\s*/i):[];return a.length?"function"==typeof t?a.map(t):a:[]}function q(e){if(e instanceof Date&&!isNaN(+e)){const t=e.toJSON();return null==t?"":t.replace(/^(.+)T.+/i,"$1")}return""}function B(e,t){if(F(e,t)<864e5)return[];const a=e.getUTCFullYear();return Array.from(Array(t.getUTCFullYear()-a+1),((e,t)=>t+a))}function R(e,t,a){const i="number"==typeof e?e:+e,r=+t,o=+a;return i<r?r:i>o?o:e}function Z(e){const{clientX:t,clientY:a,pageX:i,pageY:r}=e,o=Math.max(i,t),n=Math.max(r,a),s=e.identifier||e.pointerId;return{x:o,y:n,id:null==s?0:s}}function J(e,t){const a=t.changedTouches;if(null==a)return{newPointer:Z(t),oldPointer:e};const i=Array.from(a,(e=>Z(e))),r=null==e?i[0]:i.find((t=>t.id===e.id));return{newPointer:r,oldPointer:e}}function X(e,t,i){e.addEventListener(t,i,!!a&&{passive:!0})}class H{constructor(e,t){this._element=e,this._startPointer=null;const{down:a,move:i,up:r}=t;this._down=this._onDown(a),this._move=this._onMove(i),this._up=this._onUp(r),e&&e.addEventListener&&(e.addEventListener("mousedown",this._down),X(e,"touchstart",this._down),X(e,"touchmove",this._move),X(e,"touchend",this._up))}disconnect(){const e=this._element;e&&e.removeEventListener&&(e.removeEventListener("mousedown",this._down),e.removeEventListener("touchstart",this._down),e.removeEventListener("touchmove",this._move),e.removeEventListener("touchend",this._up))}_onDown(e){return t=>{t instanceof MouseEvent&&(this._element.addEventListener("mousemove",this._move),this._element.addEventListener("mouseup",this._up),this._element.addEventListener("mouseleave",this._up));const{newPointer:a}=J(this._startPointer,t);e(a,t),this._startPointer=a}}_onMove(e){return t=>{this._updatePointers(e,t)}}_onUp(e){return t=>{this._updatePointers(e,t,!0)}}_updatePointers(e,t,a){a&&t instanceof MouseEvent&&(this._element.removeEventListener("mousemove",this._move),this._element.removeEventListener("mouseup",this._up),this._element.removeEventListener("mouseleave",this._up));const{newPointer:i,oldPointer:r}=J(this._startPointer,t);e(i,r,t),this._startPointer=a?null:i}}class G extends s{constructor(){super(),this.firstDayOfWeek=0,this.showWeekNumber=!1,this.weekNumberType="first-4-day-week",this.landscape=!1,this.locale=f&&f().resolvedOptions&&f().resolvedOptions().locale||"en-US",this.disabledDays="",this.disabledDates="",this.weekLabel="Wk",this.inline=!1,this.dragRatio=.15,this._hasMin=!1,this._hasMax=!1,this._disabledDaysSet=new Set,this._disabledDatesSet=new Set,this._dx=-1/0,this._hasNativeWebAnimation="animate"in HTMLElement.prototype,this._updatingDateWithKey=!1;const e=A(),t=M(this.locale),a=q(e),i=A("2100-12-31");this.value=a,this.startView="calendar",this._min=new Date(e),this._max=new Date(i),this._todayDate=e,this._maxDate=i,this._yearList=B(e,i),this._selectedDate=new Date(e),this._focusedDate=new Date(e),this._formatters=t}get startView(){return this._startView}set startView(e){const t=e||"calendar";if("calendar"!==t&&"yearList"!==t)return;const a=this._startView;this._startView=t,this.requestUpdate("startView",a)}get min(){return this._hasMin?q(this._min):""}set min(e){const t=A(e),a=j(e,t);this._min=a?t:this._todayDate,this._hasMin=a,this.requestUpdate("min")}get max(){return this._hasMax?q(this._max):""}set max(e){const t=A(e),a=j(e,t);this._max=a?t:this._maxDate,this._hasMax=a,this.requestUpdate("max")}get value(){return q(this._focusedDate)}set value(e){const t=A(e),a=j(e,t)?t:this._todayDate;this._focusedDate=new Date(a),this._selectedDate=this._lastSelectedDate=new Date(a)}disconnectedCallback(){super.disconnectedCallback(),this._tracker&&(this._tracker.disconnect(),this._tracker=void 0)}render(){this._formatters.locale!==this.locale&&(this._formatters=M(this.locale));const t="yearList"===this._startView?this._renderDatepickerYearList():this._renderDatepickerCalendar(),a=this.inline?null:e`<div class="datepicker-header" part="header">${this._renderHeaderSelectorButton()}</div>`;return e`
    ${a}
    <div class="datepicker-body" part="body">${y(t)}</div>
    `}firstUpdated(){let e;e="calendar"===this._startView?this.inline?this.shadowRoot.querySelector(".btn__month-selector"):this._buttonSelectorYear:this._yearViewListItem,N(this,"datepicker-first-updated",{firstFocusableElement:e,value:this.value})}async updated(e){const t=this._startView;if(e.has("min")||e.has("max")){this._yearList=B(this._min,this._max),"yearList"===t&&this.requestUpdate();const e=+this._min,a=+this._max;if(F(e,a)>864e5){const t=+this._focusedDate;let i=t;t<e&&(i=e),t>a&&(i=a),this.value=q(new Date(i))}}if(e.has("_startView")||e.has("startView")){if("yearList"===t){const e=48*(this._selectedDate.getUTCFullYear()-this._min.getUTCFullYear()-2);!function(e,t){if(null==e.scrollTo){const{top:a,left:i}=t||{};e.scrollTop=a||0,e.scrollLeft=i||0}else e.scrollTo(t)}(this._yearViewFullList,{top:e,left:0})}if("calendar"===t&&null==this._tracker){const e=this.calendarsContainer;let t=!1,a=!1,i=!1;if(e){const r={down:()=>{i||(t=!0,this._dx=0)},move:(r,o)=>{if(i||!t)return;const n=this._dx,s=n<0&&P(e,"has-max-date")||n>0&&P(e,"has-min-date");!s&&Math.abs(n)>0&&t&&(a=!0,e.style.transform=`translateX(${I(n)}px)`),this._dx=s?0:n+(r.x-o.x)},up:async(r,o,n)=>{if(t&&a){const r=this._dx,o=e.getBoundingClientRect().width/3,n=Math.abs(r)>Number(this.dragRatio)*o,s=350,l="cubic-bezier(0, 0, .4, 1)",d=n?I(o*(r<0?-1:1)):0;i=!0,await async function(e,t){const{hasNativeWebAnimation:a=!1,keyframes:i=[],options:r={duration:100}}=t||{};if(Array.isArray(i)&&i.length)return new Promise((t=>{if(a)e.animate(i,r).onfinish=()=>t();else{const[,a]=i||[],o=()=>{e.removeEventListener("transitionend",o),t()};e.addEventListener("transitionend",o),e.style.transitionDuration=`${r.duration}ms`,r.easing&&(e.style.transitionTimingFunction=r.easing),Object.keys(a).forEach((t=>{t&&(e.style[t]=a[t])}))}}))}(e,{hasNativeWebAnimation:this._hasNativeWebAnimation,keyframes:[{transform:`translateX(${r}px)`},{transform:`translateX(${d}px)`}],options:{duration:s,easing:l}}),n&&this._updateMonth(r<0?"next":"previous").handleEvent(),t=a=i=!1,this._dx=-1/0,e.removeAttribute("style"),N(this,"datepicker-animation-finished")}else t&&(this._updateFocusedDate(n),t=a=!1,this._dx=-1/0)}};this._tracker=new H(e,r)}}e.get("_startView")&&"calendar"===t&&this._focusElement('[part="year-selector"]')}this._updatingDateWithKey&&(this._focusElement('[part="calendars"]:nth-of-type(2) .day--focused'),this._updatingDateWithKey=!1)}_focusElement(e){const t=this.shadowRoot.querySelector(e);t&&t.focus()}_renderHeaderSelectorButton(){const{yearFormat:t,dateFormat:a}=this._formatters,i="calendar"===this.startView,r=this._focusedDate,o=a(r),n=t(r);return e`
    <button
      class="${l({"btn__year-selector":!0,selected:!i})}"
      type="button"
      part="year-selector"
      data-view="${"yearList"}"
      @click="${this._updateView("yearList")}">${n}</button>

    <div class="datepicker-toolbar" part="toolbar">
      <button
        class="${l({"btn__calendar-selector":!0,selected:i})}"
        type="button"
        part="calendar-selector"
        data-view="${"calendar"}"
        @click="${this._updateView("calendar")}">${o}</button>
    </div>
    `}_renderDatepickerYearList(){const{yearFormat:t}=this._formatters,a=this._focusedDate.getUTCFullYear();return e`
    <div class="datepicker-body__year-list-view" part="year-list-view">
      <div class="year-list-view__full-list" part="year-list" @click="${this._updateYear}">
      ${this._yearList.map((i=>e`<button
        class="${l({"year-list-view__list-item":!0,"year--selected":a===i})}"
        type="button"
        part="year"
        .year="${i}">${t(x(i,0,1))}</button>`))}</div>
    </div>
    `}_renderDatepickerCalendar(){const{longMonthYearFormat:t,dayFormat:a,fullDateFormat:i,longWeekdayFormat:r,narrowWeekdayFormat:o}=this._formatters,n=K(this.disabledDays,Number),s=K(this.disabledDates,A),d=this.showWeekNumber,c=this._focusedDate,h=this.firstDayOfWeek,p=A(),u=this._selectedDate,y=this._max,f=this._min,{calendars:b,disabledDaysSet:_,disabledDatesSet:v,weekdays:w}=O({dayFormat:a,fullDateFormat:i,longWeekdayFormat:r,narrowWeekdayFormat:o,firstDayOfWeek:h,disabledDays:n,disabledDates:s,locale:this.locale,selectedDate:u,showWeekNumber:this.showWeekNumber,weekNumberType:this.weekNumberType,max:y,min:f,weekLabel:this.weekLabel}),g=!b[0].calendar.length,k=!b[2].calendar.length,D=w.map((t=>e`<th
        class="calendar-weekday"
        part="calendar-weekday"
        role="columnheader"
        aria-label="${t.label}"
      >
        <div class="weekday" part="weekday">${t.value}</div>
      </th>`)),x=m(b,(e=>e.key),(({calendar:a},i)=>{if(!a.length)return e`<div class="calendar-container" part="calendar"></div>`;const r=`calendarcaption${i}`,o=a[1][1].fullDate,n=1===i,s=n&&!this._isInVisibleMonth(c,u)?U({disabledDaysSet:_,disabledDatesSet:v,hasAltKey:!1,keyCode:36,focusedDate:c,selectedDate:u,minTime:+f,maxTime:+y}):c;return e`
      <div class="calendar-container" part="calendar">
        <table class="calendar-table" part="table" role="grid" aria-labelledby="${r}">
          <caption id="${r}">
            <div class="calendar-label" part="label">${o?t(o):""}</div>
          </caption>

          <thead role="rowgroup">
            <tr class="calendar-weekdays" part="weekdays" role="row">${D}</tr>
          </thead>

          <tbody role="rowgroup">${a.map((t=>e`<tr role="row">${t.map(((t,a)=>{const{disabled:i,fullDate:r,label:o,value:h}=t;if(!r&&h&&d&&a<1)return e`<th
                      class="full-calendar__day weekday-label"
                      part="calendar-day"
                      scope="row"
                      role="rowheader"
                      abbr="${o}"
                      aria-label="${o}"
                    >${h}</th>`;if(!h||!r)return e`<td class="full-calendar__day day--empty" part="calendar-day"></td>`;const u=+new Date(r),y=+c===u,m=n&&s.getUTCDate()===Number(h);return e`
                  <td
                    tabindex="${m?"0":"-1"}"
                    class="${l({"full-calendar__day":!0,"day--disabled":i,"day--today":+p===u,"day--focused":!i&&y})}"
                    part="calendar-day"
                    role="gridcell"
                    aria-disabled="${i?"true":"false"}"
                    aria-label="${o}"
                    aria-selected="${y?"true":"false"}"
                    .fullDate="${r}"
                    .day="${h}"
                  >
                    <div class="calendar-day" part="day">${h}</div>
                  </td>
                  `}))}</tr>`))}</tbody>
        </table>
      </div>
      `}));return this._disabledDatesSet=v,this._disabledDaysSet=_,e`
    <div class="datepicker-body__calendar-view" part="calendar-view">
      <div class="calendar-view__month-selector" part="month-selectors">
        <div class="month-selector-container">${g?null:e`
          <button
            class="btn__month-selector"
            type="button"
            part="month-selector"
            aria-label="Previous month"
            @click="${this._updateMonth("previous")}"
          >${T}</button>
        `}</div>

        <div class="month-selector-container">${k?null:e`
          <button
            class="btn__month-selector"
            type="button"
            part="month-selector"
            aria-label="Next month"
            @click="${this._updateMonth("next")}"
          >${C}</button>
        `}</div>
      </div>

      <div
        class="${l({"calendars-container":!0,"has-min-date":g,"has-max-date":k})}"
        part="calendars"
        @keyup="${this._updateFocusedDateWithKeyboard}"
      >${x}</div>
    </div>
    `}_updateView(e){return z((()=>{"calendar"===e&&(this._selectedDate=this._lastSelectedDate=new Date(R(this._focusedDate,this._min,this._max))),this._startView=e}))}_updateMonth(e){return z((()=>{if(null==this.calendarsContainer)return this.updateComplete;const t=this._lastSelectedDate||this._selectedDate,a=this._min,i=this._max,r="previous"===e,o=x(t.getUTCFullYear(),t.getUTCMonth()+(r?-1:1),1),n=o.getUTCFullYear(),s=o.getUTCMonth(),l=a.getUTCFullYear(),d=a.getUTCMonth(),c=i.getUTCFullYear(),h=i.getUTCMonth();return n<l||n<=l&&s<d||(n>c||n>=c&&s>h)||(this._lastSelectedDate=o,this._selectedDate=this._lastSelectedDate),this.updateComplete}))}_updateYear(e){const t=L(e,(e=>P(e,"year-list-view__list-item")));if(null==t)return;const a=R(new Date(this._focusedDate).setUTCFullYear(+t.year),this._min,this._max);this._selectedDate=this._lastSelectedDate=new Date(a),this._focusedDate=new Date(a),this._startView="calendar"}_updateFocusedDate(e){const t=L(e,(e=>P(e,"full-calendar__day")));null==t||["day--empty","day--disabled","day--focused","weekday-label"].some((e=>P(t,e)))||(this._focusedDate=new Date(t.fullDate),N(this,"datepicker-value-updated",{isKeypress:!1,value:this.value}))}_updateFocusedDateWithKeyboard(e){const t=e.keyCode;if(13===t||32===t)return N(this,"datepicker-value-updated",{keyCode:t,isKeypress:!0,value:this.value}),void(this._focusedDate=new Date(this._selectedDate));if(9===t||!D.has(t))return;const a=this._selectedDate,i=U({keyCode:t,selectedDate:a,disabledDatesSet:this._disabledDatesSet,disabledDaysSet:this._disabledDaysSet,focusedDate:this._focusedDate,hasAltKey:e.altKey,maxTime:+this._max,minTime:+this._min});this._isInVisibleMonth(i,a)||(this._selectedDate=this._lastSelectedDate=i),this._focusedDate=i,this._updatingDateWithKey=!0,N(this,"datepicker-value-updated",{keyCode:t,isKeypress:!0,value:this.value})}_isInVisibleMonth(e,t){const a=e.getUTCFullYear(),i=e.getUTCMonth(),r=t.getUTCFullYear(),o=t.getUTCMonth();return a===r&&i===o}get calendarsContainer(){return this.shadowRoot.querySelector(".calendars-container")}}var Q,ee;G.styles=[$,S,t`
    :host {
      width: 312px;
      /** NOTE: Magic number as 16:9 aspect ratio does not look good */
      /* height: calc((var(--app-datepicker-width) / .66) - var(--app-datepicker-footer-height, 56px)); */
      background-color: var(--app-datepicker-bg-color, #fff);
      color: var(--app-datepicker-color, #000);
      border-radius:
        var(--app-datepicker-border-top-left-radius, 0)
        var(--app-datepicker-border-top-right-radius, 0)
        var(--app-datepicker-border-bottom-right-radius, 0)
        var(--app-datepicker-border-bottom-left-radius, 0);
      contain: content;
      overflow: hidden;
    }
    :host([landscape]) {
      display: flex;

      /** <iphone-5-landscape-width> - <standard-side-margin-width> */
      min-width: calc(568px - 16px * 2);
      width: calc(568px - 16px * 2);
    }

    .datepicker-header + .datepicker-body {
      border-top: 1px solid var(--app-datepicker-separator-color, #ddd);
    }
    :host([landscape]) > .datepicker-header + .datepicker-body {
      border-top: none;
      border-left: 1px solid var(--app-datepicker-separator-color, #ddd);
    }

    .datepicker-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      position: relative;
      padding: 16px 24px;
    }
    :host([landscape]) > .datepicker-header {
      /** :this.<one-liner-month-day-width> + :this.<side-padding-width> */
      min-width: calc(14ch + 24px * 2);
    }

    .btn__year-selector,
    .btn__calendar-selector {
      color: var(--app-datepicker-selector-color, rgba(0, 0, 0, .55));
      cursor: pointer;
      /* outline: none; */
    }
    .btn__year-selector.selected,
    .btn__calendar-selector.selected {
      color: currentColor;
    }

    /**
      * NOTE: IE11-only fix. This prevents formatted focused date from overflowing the container.
      */
    .datepicker-toolbar {
      width: 100%;
    }

    .btn__year-selector {
      font-size: 16px;
      font-weight: 700;
    }
    .btn__calendar-selector {
      font-size: 36px;
      font-weight: 700;
      line-height: 1;
    }

    .datepicker-body {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .datepicker-body__calendar-view {
      min-height: 56px;
    }

    .calendar-view__month-selector {
      display: flex;
      align-items: center;

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0 8px;
      z-index: 1;
    }

    .month-selector-container {
      max-height: 56px;
      height: 100%;
    }
    .month-selector-container + .month-selector-container {
      margin: 0 0 0 auto;
    }

    .btn__month-selector {
      padding: calc((56px - 24px) / 2);
      /**
        * NOTE: button element contains no text, only SVG.
        * No extra height will incur with such setting.
        */
      line-height: 0;
    }
    .btn__month-selector > svg {
      fill: currentColor;
    }

    .calendars-container {
      display: flex;
      justify-content: center;

      position: relative;
      top: 0;
      left: calc(-100%);
      width: calc(100% * 3);
      transform: translateZ(0);
      will-change: transform;
      /**
        * NOTE: Required for Pointer Events API to work on touch devices.
        * Native \`pan-y\` action will be fired by the browsers since we only care about the
        * horizontal direction. This is great as vertical scrolling still works even when touch
        * event happens on a datepicker's calendar.
        */
      touch-action: pan-y;
      /* outline: none; */
    }

    .year-list-view__full-list {
      max-height: calc(48px * 7);
      overflow-y: auto;

      scrollbar-color: var(--app-datepicker-scrollbar-thumb-bg-color, rgba(0, 0, 0, .35)) rgba(0, 0, 0, 0);
      scrollbar-width: thin;
    }
    .year-list-view__full-list::-webkit-scrollbar {
      width: 8px;
      background-color: rgba(0, 0, 0, 0);
    }
    .year-list-view__full-list::-webkit-scrollbar-thumb {
      background-color: var(--app-datepicker-scrollbar-thumb-bg-color, rgba(0, 0, 0, .35));
      border-radius: 50px;
    }
    .year-list-view__full-list::-webkit-scrollbar-thumb:hover {
      background-color: var(--app-datepicker-scrollbar-thumb-hover-bg-color, rgba(0, 0, 0, .5));
    }

    .calendar-weekdays > th,
    .weekday-label {
      color: var(--app-datepicker-weekday-color, rgba(0, 0, 0, .55));
      font-weight: 400;
      transform: translateZ(0);
      will-change: transform;
    }

    .calendar-container,
    .calendar-label,
    .calendar-table {
      width: 100%;
    }

    .calendar-container {
      position: relative;
      padding: 0 16px 16px;
    }

    .calendar-table {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;

      border-collapse: collapse;
      border-spacing: 0;
      text-align: center;
    }

    .calendar-label {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 56px;
      font-weight: 500;
      text-align: center;
    }

    .calendar-weekday,
    .full-calendar__day {
      position: relative;
      width: calc(100% / 7);
      height: 0;
      padding: calc(100% / 7 / 2) 0;
      outline: none;
      text-align: center;
    }
    .full-calendar__day:not(.day--disabled):focus {
      outline: #000 dotted 1px;
      outline: -webkit-focus-ring-color auto 1px;
    }
    :host([showweeknumber]) .calendar-weekday,
    :host([showweeknumber]) .full-calendar__day {
      width: calc(100% / 8);
      padding-top: calc(100% / 8);
      padding-bottom: 0;
    }
    :host([showweeknumber]) th.weekday-label {
      padding: 0;
    }

    /**
      * NOTE: Interesting fact! That is ::after will trigger paint when dragging. This will trigger
      * layout and paint on **ONLY** affected nodes. This is much cheaper as compared to rendering
      * all :::after of all calendar day elements. When dragging the entire calendar container,
      * because of all layout and paint trigger on each and every ::after, this becomes a expensive
      * task for the browsers especially on low-end devices. Even though animating opacity is much
      * cheaper, the technique does not work here. Adding 'will-change' will further reduce overall
      * painting at the expense of memory consumption as many cells in a table has been promoted
      * a its own layer.
      */
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label) {
      transform: translateZ(0);
      will-change: transform;
    }
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label).day--focused::after,
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.day--focused):not(.weekday-label):hover::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--app-datepicker-accent-color, #1a73e8);
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
    }
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label) {
      cursor: pointer;
      pointer-events: auto;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .full-calendar__day.day--focused:not(.day--empty):not(.day--disabled):not(.weekday-label)::after,
    .full-calendar__day.day--today.day--focused:not(.day--empty):not(.day--disabled):not(.weekday-label)::after {
      opacity: 1;
    }

    .calendar-weekday > .weekday,
    .full-calendar__day > .calendar-day {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 5%;
      left: 5%;
      width: 90%;
      height: 90%;
      color: currentColor;
      font-size: 14px;
      pointer-events: none;
      z-index: 1;
    }
    .full-calendar__day.day--today {
      color: var(--app-datepicker-accent-color, #1a73e8);
    }
    .full-calendar__day.day--focused,
    .full-calendar__day.day--today.day--focused {
      color: var(--app-datepicker-focused-day-color, #fff);
    }
    .full-calendar__day.day--empty,
    .full-calendar__day.weekday-label,
    .full-calendar__day.day--disabled > .calendar-day {
      pointer-events: none;
    }
    .full-calendar__day.day--disabled:not(.day--today) {
      color: var(--app-datepicker-disabled-day-color, rgba(0, 0, 0, .55));
    }

    .year-list-view__list-item {
      position: relative;
      width: 100%;
      padding: 12px 16px;
      text-align: center;
      /** NOTE: Reduce paint when hovering and scrolling, but this increases memory usage */
      /* will-change: opacity; */
      /* outline: none; */
    }
    .year-list-view__list-item::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--app-datepicker-focused-year-bg-color, #000);
      opacity: 0;
      pointer-events: none;
    }
    .year-list-view__list-item:focus::after {
      opacity: .05;
    }
    .year-list-view__list-item.year--selected {
      color: var(--app-datepicker-accent-color, #1a73e8);
      font-size: 24px;
      font-weight: 500;
    }

    @media (any-hover: hover) {
      .btn__month-selector:hover,
      .year-list-view__list-item:hover {
        cursor: pointer;
      }
      .full-calendar__day:not(.day--empty):not(.day--disabled):not(.day--focused):not(.weekday-label):hover::after {
        opacity: .15;
      }
      .year-list-view__list-item:hover::after {
        opacity: .05;
      }
    }

    @supports (background: -webkit-canvas(squares)) {
      .calendar-container {
        padding: 56px 16px 16px;
      }

      table > caption {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        will-change: transform;
      }
    }
    `],i([r({type:Number,reflect:!0})],G.prototype,"firstDayOfWeek",void 0),i([r({type:Boolean,reflect:!0})],G.prototype,"showWeekNumber",void 0),i([r({type:String,reflect:!0})],G.prototype,"weekNumberType",void 0),i([r({type:Boolean,reflect:!0})],G.prototype,"landscape",void 0),i([r({type:String,reflect:!0})],G.prototype,"startView",null),i([r({type:String,reflect:!0})],G.prototype,"min",null),i([r({type:String,reflect:!0})],G.prototype,"max",null),i([r({type:String})],G.prototype,"value",null),i([r({type:String})],G.prototype,"locale",void 0),i([r({type:String})],G.prototype,"disabledDays",void 0),i([r({type:String})],G.prototype,"disabledDates",void 0),i([r({type:String})],G.prototype,"weekLabel",void 0),i([r({type:Boolean})],G.prototype,"inline",void 0),i([r({type:Number})],G.prototype,"dragRatio",void 0),i([r({type:Date,attribute:!1})],G.prototype,"_selectedDate",void 0),i([r({type:Date,attribute:!1})],G.prototype,"_focusedDate",void 0),i([r({type:String,attribute:!1})],G.prototype,"_startView",void 0),i([o(".year-list-view__full-list")],G.prototype,"_yearViewFullList",void 0),i([o(".btn__year-selector")],G.prototype,"_buttonSelectorYear",void 0),i([o(".year-list-view__list-item")],G.prototype,"_yearViewListItem",void 0),i([n({passive:!0})],G.prototype,"_updateYear",null),i([n({passive:!0})],G.prototype,"_updateFocusedDateWithKeyboard",null),Q="app-datepicker",ee=G,window.customElements&&!window.customElements.get(Q)&&window.customElements.define(Q,ee);let te=d([u("ha-dialog-date-picker")],(function(a,i){return{F:class extends i{constructor(...e){super(...e),a(this)}},d:[{kind:"field",decorators:[r()],key:"value",value:void 0},{kind:"field",decorators:[r({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[r()],key:"label",value:void 0},{kind:"field",decorators:[c()],key:"_params",value:void 0},{kind:"field",decorators:[c()],key:"_value",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._value=e.value}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,h(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._params?e`<ha-dialog open @closed=${this.closeDialog}>
      <app-datepicker
        .value=${this._value}
        .min=${this._params.min}
        .max=${this._params.max}
        .locale=${this._params.locale}
        @datepicker-value-updated=${this._valueChanged}
      ></app-datepicker>
      <mwc-button slot="secondaryAction" @click=${this._setToday}
        >today</mwc-button
      >
      <mwc-button slot="primaryAction" dialogaction="cancel" class="cancel-btn">
        cancel
      </mwc-button>
      <mwc-button slot="primaryAction" @click=${this._setValue}>ok</mwc-button>
    </ha-dialog>`:e``}},{kind:"method",key:"_valueChanged",value:function(e){this._value=e.detail.value}},{kind:"method",key:"_setToday",value:function(){this._value=(new Date).toISOString().split("T")[0]}},{kind:"method",key:"_setValue",value:function(){var e;null===(e=this._params)||void 0===e||e.onChange(this._value),this.closeDialog()}},{kind:"field",static:!0,key:"styles",value:()=>[p,t`
      ha-dialog {
        --dialog-content-padding: 0;
        --justify-action-buttons: space-between;
      }
      app-datepicker {
        --app-datepicker-accent-color: var(--primary-color);
        --app-datepicker-bg-color: transparent;
        --app-datepicker-color: var(--primary-text-color);
        --app-datepicker-disabled-day-color: var(--disabled-text-color);
        --app-datepicker-focused-day-color: var(--text-primary-color);
        --app-datepicker-focused-year-bg-color: var(--primary-color);
        --app-datepicker-selector-color: var(--secondary-text-color);
        --app-datepicker-separator-color: var(--divider-color);
        --app-datepicker-weekday-color: var(--secondary-text-color);
      }
      app-datepicker::part(calendar-day):focus {
        outline: none;
      }
      @media all and (min-width: 450px) {
        ha-dialog {
          --mdc-dialog-min-width: 300px;
        }
      }
      @media all and (max-width: 450px), all and (max-height: 500px) {
        app-datepicker {
          width: 100%;
        }
      }
    `]}]}}),s);export{te as HaDialogDatePicker};
