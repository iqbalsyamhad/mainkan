import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Vidcard extends React.PureComponent {
    downloadActions(vidId, title){
        const downloadManager = require("react-native-simple-download-manager");
        const url = "https://ril.tjfijl.frl/b8d78c6d1826c055602446fe2858c527/"+vidId;
        const headers = { Authorization: "Bearer abcsdsjkdjskjdkskjd" };
        const config = {
            downloadTitle: "Download "+title,
            downloadDescription: "Thanks for using",
            saveAsName: title,
            allowedInRoaming: true,
            allowedInMetered: true,
            showInDownloads: true,
            external: false, //when false basically means use the default Download path (version ^1.3)
            path: "Download/" //if "external" is true then use this path (version ^1.3)
        };
        
        downloadManager
        .download(url, headers, config)
        .then(response => {
            alert('Download berhasil!');
        })
        .catch(err => {
            alert('Download Gagal');
        });
    }

    render(){
        return (
            <View style={styles.card} key={this.props.item.id.videoId}>
                <Image source={{uri: this.props.item.snippet.thumbnails.default.url}} style={{width: 100, height: null}} />
                <View style={{padding: 10, flex: 1}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.titleText}>
                            {this.props.item.snippet.title}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={{justifyContent: 'center'}}
                    onPress={() => {this.downloadActions(this.props.item.id.videoId, this.props.item.snippet.title)}}>
                    <Icon style={{margin: 10}} name="arrow-circle-down" size={25} color='#000000' />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: {
            width: 5,
            height: 5
        },
        elevation: 1,
        overflow: 'hidden'
    },
    titleText: {
        fontSize: 14
    },
});