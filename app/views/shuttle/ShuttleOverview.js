import React from 'react';
import {
	View,
	Text,
	TouchableHighlight,
} from 'react-native';

import ShuttleSmallList from './ShuttleSmallList';
import { getMinutesETA } from '../../util/shuttle';

const css = require('../../styles/css');

const ShuttleOverview = ({ onPress, stopData, stopID }) => (
	<View>
		<TouchableHighlight underlayColor={'rgba(200,200,200,.1)'} onPress={() => onPress()}>
			<View>
				<View style={css.shuttle_card_row}>
					<View style={css.shuttle_card_row_top}>
						<View style={css.shuttle_card_rt_1} />
						<View style={[css.shuttle_card_rt_2, { backgroundColor: stopData[stopID].arrivals[0].route.color, borderColor: stopData[stopID].arrivals[0].route.color }]}>
							<Text style={css.shuttle_card_rt_2_label}>
								{
									// THIS SHOULDN'T BE NEEDED, complain to syncromatics
									// (stopData[stopID].arrivals[0].route.shortName === 'Campus Loop') ? ('L') : (stopData[stopID].arrivals[0].route.shortName)
									stopData[stopID].arrivals[0].route.shortName.replace(/[()]/g, '').substring(0, 1) // Limits shortName to one char
								}
							</Text>
						</View>
						<View style={css.shuttle_card_rt_3}>
							<Text style={css.shuttle_card_rt_3_label}>@</Text>
						</View>
						<View style={css.shuttle_card_rt_4}>
							<Text
								style={css.shuttle_card_rt_4_label}
								numberOfLines={3}
							>
								{stopData[stopID].name}
							</Text>
						</View>
						<View style={css.shuttle_card_rt_5} />
					</View>
					<View style={css.shuttle_card_row_bot}>
						<Text
							style={css.shuttle_card_row_name}
							numberOfLines={1}
						>
							{stopData[stopID].arrivals[0].route.name}
						</Text>
						<Text style={css.shuttle_card_row_arriving}>
							<Text style={css.grey}>Arriving in: </Text>
							{getMinutesETA(stopData[stopID].arrivals[0].secondsToArrival)}
						</Text>
					</View>
				</View>
				<ShuttleSmallList
					arrivalData={stopData[stopID].arrivals.slice(1)}
					rows={2}
					scrollEnabled={false}
				/>
			</View>
		</TouchableHighlight>
	</View>
);

export default ShuttleOverview;
