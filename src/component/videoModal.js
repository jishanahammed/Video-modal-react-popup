import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export class videoModal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }
    render() {
        return (
            <div>
                <div>
                    <ModalVideo
                        
                        channel="youtube"
                        youtube={{
                            autoplay: 1,
                            mute: 1
                        }}
                        isOpen={this.state.isOpen}
                        videoId="3ekZ5hFvrtY"
                        onClose={() => this.setState({ isOpen: false })}
                    />
                    <button onClick={this.openModal}>Open</button>
                </div>
            </div>
        );
    }
}

export default videoModal;
