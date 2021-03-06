import React from 'react';
import {
	View,
	ListView,
} from 'react-native';

import EventItem from './EventItem';
import { doPRM } from '../../util/general';

const eventDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const EventList = ({ data, rows, scrollEnabled }) => (
	<View
		style={{ height: getRowHeight(rows) }}
	>
		<ListView
			scrollEnabled={scrollEnabled}
			dataSource={eventDataSource.cloneWithRows(data)}
			renderRow={(row) => (
				<EventItem data={row} />
			)}
		/>
	</View>
);

function getRowHeight(rows) {
	// titleFont + 3*(descFont + descPad) + dateFont + datePad
	const rowHeight =  doPRM(17) + (3 * (doPRM(14) + doPRM(8))) + doPRM(11) + doPRM(8);
	const padding = 28; // rowPad

	return rows * (rowHeight + padding);
}

export default EventList;
