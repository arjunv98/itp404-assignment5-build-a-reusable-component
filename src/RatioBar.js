import React from 'react';

export default function RatioBar(props) {
   let { width, data, showPercent } = props;

   let totalValue = 0;
   data.map(function (item) {
      if (item.value > 0) {
         totalValue += item.value;
      }
      return 1;
   }, this);
   let values = data && data.length && data.map(function (item, i) {
      if (item.value > 0) {
         let itemRatio = item.value / totalValue * 100;
         let roundedRatio = Math.round(itemRatio)
         return (
            <div className="value" style={{ 'color': item.color, 'width': itemRatio + '%' }} key={i}>
               <span>{showPercent ? roundedRatio + '%' : item.value}</span>
            </div>
         );
      }
      return 1;
   }, this);

   let calibrations = data && data.length && data.map(function (item, i) {
      if (item.value > 0) {
         let itemRatio = item.value / totalValue * 100;
         return (
            <div className="graduation" style={{ 'color': item.color, 'width': itemRatio + '%' }} key={i}>
               <span>|</span>
            </div>
         );
      }
      return 1;
   }, this);

   let bars = data && data.length && data.map(function (item, i) {
      if (item.value > 0) {
         let itemRatio = item.value / totalValue * 100;
         return (
            <div className="bar" style={{ 'backgroundColor': item.color, 'width': itemRatio + '%' }} key={i}>

            </div>
         );
      }
      return 1;
   }, this);

   let legends = data && data.length && data.map(function (item, i) {
      if (item.value > 0) {
         return (
            <div className="legend" key={i}>
               <span className="dot" style={{ 'color': item.color }}>●</span>
               <span className="label">{item.name}</span>
            </div>
         );
      }
      return 1;
   }, this);

   return (
      <div className="ratio-bar" style={{ 'width': width + 'px' }}>
         <div className="values">
            {values === '' ? '' : values}
         </div>
         <div className="scale">
            {calibrations === '' ? '' : calibrations}
         </div>
         <div className="bars">
            {bars === '' ? '' : bars}
         </div>
         <div className="legends">
            {legends === '' ? '' : legends}
         </div>
      </div>
   );
}