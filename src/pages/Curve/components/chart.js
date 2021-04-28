import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import data from './data';

const LineChart = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 50, bottom: 50, left: 30 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
        yFormat=" >-.2f"

        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
        }}
        colors="#a05cff"
        pointSize={10}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointLabelYOffset={-12}
        useMesh={true}
        enableArea={true}        

        
    />
  );
  
  export default LineChart;
  