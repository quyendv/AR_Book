// @ts-nocheck
import '@ar-js-org/ar.js';
import 'aframe';
import { useLayoutEffect } from 'react';

function Camera() {
  // const imageTargets = useMemo(
  //   () => [
  //     {
  //       id: 'marker1',
  //       url: 'https://topcv-clone.s3.ap-southeast-1.amazonaws.com/model_2',
  //       modelUrl: 'https://topcv-clone.s3.ap-southeast-1.amazonaws.com/chinese_pottery_vase.glb',
  //     },
  //     {
  //       id: 'marker2',
  //       url: 'https://topcv-clone.s3.ap-southeast-1.amazonaws.com/model_3',
  //       modelUrl: 'https://topcv-clone.s3.ap-southeast-1.amazonaws.com/pharaonic_pottery.glb',
  //     },
  //   ],
  //   [],
  // );

  useLayoutEffect(() => {
    AFRAME.registerComponent('nft-api-call', {
      init: function () {
        const markerId = this.el.getAttribute('id');
        this.el.addEventListener('markerFound', () => {
          console.log(markerId);
        });
      },
    });
  }, []);

  return (
    <a-scene
      vr-mode-ui="enabled: false;"
      renderer="logarithmicDepthBuffer: true;"
      embedded
      arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
    >
      <a-assets>
        <a-asset-item
          id="maker1"
          src="https://topcv-clone.s3.ap-southeast-1.amazonaws.com/chinese_pottery_vase.glb"
        ></a-asset-item>
        <a-asset-item
          id="maker2"
          src="https://topcv-clone.s3.ap-southeast-1.amazonaws.com/pharaonic_pottery.glb"
        ></a-asset-item>
        {/* <!-- ${imageTargets.map(target => `
          <a-asset-item
            url=`${target.modelUrl}`
            id="model"
          >
          </a-asset-item>
        `).join('')} --> */}
      </a-assets>
      <a-nft
        id="444"
        type="nft"
        url="https://topcv-clone.s3.ap-southeast-1.amazonaws.com/model_2"
        smooth="true"
        smoothCount="10"
        smoothTolerance=".01"
        smoothThreshold="5"
        nft-api-call
      >
        <a-entity id="model-container" position="0 0 -5">
          <a-entity
            gltf-model="#maker1"
            scale="2 2 2"
            animation__rotate="property: rotation; to: 0 360 0; loop: true; dur: 10000"
            rotation="0 0 0"
          ></a-entity>
        </a-entity>
      </a-nft>

      <a-nft
        id="555"
        type="nft"
        url="https://topcv-clone.s3.ap-southeast-1.amazonaws.com/model_3"
        smooth="true"
        smoothCount="10"
        smoothTolerance=".01"
        smoothThreshold="5"
        nft-api-call
      >
        <a-entity id="model-container" position="0 0 -5">
          <a-entity
            gltf-model="#maker2"
            scale="50 50 50"
            animation__rotate="property: rotation; to: 0 360 0; loop: true; dur: 10000"
            rotation="0 0 0"
          ></a-entity>
        </a-entity>
      </a-nft>

      <a-entity camera position="0 0 0 0"></a-entity>
    </a-scene>
  );
}

export default Camera;
