TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_85751AF0_8CBC_C5AE_41B3_EEB9EDA80361",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_0_HS_1_0.png",
           "height": 366,
           "width": 1095
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 17.29,
        "hfov": 62.77,
        "yaw": -83.73
       }
      ],
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_0_HS_1_0_map.gif",
           "height": 16,
           "width": 47
          }
         ]
        },
        "pitch": 17.29,
        "hfov": 62.77,
        "yaw": -83.73
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_86013272_8CC5_C493_41D8_2AA379F59B11, this.camera_91312648_9859_08D1_41B8_1522B2D3B6B2); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_86D609AC_8CC5_47B6_41C1_39E655ECF51C",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_0_HS_0_0.png",
           "height": 257,
           "width": 256
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -15.13,
        "hfov": 14.84,
        "yaw": -89.7
       }
      ],
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_0_HS_0_0_0_map.gif",
           "height": 128,
           "width": 128
          }
         ]
        },
        "pitch": -15.13,
        "hfov": 14.84,
        "yaw": -89.7
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "partial": false,
  "label": "Perpustakaan",
  "class": "Panorama",
  "hfovMax": 120,
  "id": "panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297",
  "thumbnailUrl": "media/panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_t.jpg",
  "pitch": 0,
  "hfov": 360,
  "vfov": 180
 },
 {
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "buttonZoomIn": "this.IconButton_84F59B4F_8C7D_1F37_41A1_5D5A3EC616BD",
  "buttonZoomOut": "this.IconButton_84E75E30_8C7B_196A_41D0_B68F168D535F",
  "displayPlaybackBar": true,
  "touchControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -4.56,
   "yaw": -89.69
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297, this.camera_9138A633_9859_08B7_41C0_B7DB1F403A55); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_86EDAA13_8CC5_4491_41DE_E3358E76128A",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_0_HS_3_0.png",
           "height": 257,
           "width": 256
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.38,
        "hfov": 15.02,
        "yaw": 49.02
       }
      ],
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_0_HS_3_0_0_map.gif",
           "height": 128,
           "width": 128
          }
         ]
        },
        "pitch": -12.38,
        "hfov": 15.02,
        "yaw": 49.02
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_86272918_8CC3_C49F_41E0_340033A6AD96, this.camera_9106161F_9859_086F_41D2_C5A0ADB52657); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_86A90C44_8CC3_7CF6_41C3_344363662F8A",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_0_HS_2_0.png",
           "height": 257,
           "width": 256
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.77,
        "hfov": 15.15,
        "yaw": -134.32
       }
      ],
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_0_HS_2_0_0_map.gif",
           "height": 128,
           "width": 128
          }
         ]
        },
        "pitch": -9.77,
        "hfov": 15.15,
        "yaw": -134.32
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223, this.camera_910DA60A_9859_0851_41D5_97373432C5A9); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_86A074D3_8CCD_4D91_41C1_2243DEC74EC5",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_0_HS_1_0.png",
           "height": 140,
           "width": 139
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -22.1,
        "hfov": 7.76,
        "yaw": 168.86
       }
      ],
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_0_HS_1_0_0_map.gif",
           "height": 70,
           "width": 69
          }
         ]
        },
        "pitch": -22.1,
        "hfov": 7.76,
        "yaw": 168.86
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A, this.camera_911495FB_9859_0BB7_41E0_BD7A2A7D4DF7); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_86ACB583_8CCF_4C71_41DC_4270CBAFD371",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_0_HS_0_0.png",
           "height": 257,
           "width": 257
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.34,
        "hfov": 15.42,
        "yaw": -34.89
       }
      ],
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_0_HS_0_0_0_map.gif",
           "height": 128,
           "width": 128
          }
         ]
        },
        "pitch": 1.34,
        "hfov": 15.42,
        "yaw": -34.89
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "partial": false,
  "label": "Informasi Perpus",
  "class": "Panorama",
  "hfovMax": 120,
  "id": "panorama_86013272_8CC5_C493_41D8_2AA379F59B11",
  "thumbnailUrl": "media/panorama_86013272_8CC5_C493_41D8_2AA379F59B11_t.jpg",
  "pitch": 0,
  "hfov": 360,
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_86013272_8CC5_C493_41D8_2AA379F59B11_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_86013272_8CC5_C493_41D8_2AA379F59B11, this.camera_9112B5E6_9859_0BD1_41DC_930EDFEF1424); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_86FB0C03_8CCC_BC71_41C2_1226E8623AD8",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_0_HS_0_0.png",
           "height": 257,
           "width": 256
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -10.22,
        "hfov": 15.13,
        "yaw": -95.85
       }
      ],
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_0_HS_0_0_0_map.gif",
           "height": 128,
           "width": 128
          }
         ]
        },
        "pitch": -10.22,
        "hfov": 15.13,
        "yaw": -95.85
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "partial": false,
  "label": "R Reading",
  "class": "Panorama",
  "hfovMax": 120,
  "id": "panorama_86272918_8CC3_C49F_41E0_340033A6AD96",
  "thumbnailUrl": "media/panorama_86272918_8CC3_C49F_41E0_340033A6AD96_t.jpg",
  "pitch": 0,
  "hfov": 360,
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_86272918_8CC3_C49F_41E0_340033A6AD96_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_86013272_8CC5_C493_41D8_2AA379F59B11, this.camera_911F35D1_9859_0BF3_41B2_99FD776546A1); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_869CECEB_8CCC_DDB2_4189_095E01CC4276",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_0_HS_0_0.png",
           "height": 257,
           "width": 256
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.34,
        "hfov": 14.9,
        "yaw": -126.12
       }
      ],
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_0_HS_0_0_0_map.gif",
           "height": 128,
           "width": 128
          }
         ]
        },
        "pitch": -14.34,
        "hfov": 14.9,
        "yaw": -126.12
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "partial": false,
  "label": "Japan Corner",
  "class": "Panorama",
  "hfovMax": 120,
  "id": "panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223",
  "thumbnailUrl": "media/panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_t.jpg",
  "pitch": 0,
  "hfov": 360,
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_86013272_8CC5_C493_41D8_2AA379F59B11, this.camera_9164A5BC_9859_0BB1_41C7_D55C6498118C); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_86B96B63_8CCD_C4B1_41BC_DC5D8011E5A9",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_0_HS_0_0.png",
           "height": 257,
           "width": 256
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.97,
        "hfov": 15.29,
        "yaw": 81.41
       }
      ],
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_0_HS_0_0_0_map.gif",
           "height": 128,
           "width": 128
          }
         ]
        },
        "pitch": -5.97,
        "hfov": 15.29,
        "yaw": 81.41
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "partial": false,
  "label": "Area releks",
  "class": "Panorama",
  "hfovMax": 120,
  "id": "panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A",
  "thumbnailUrl": "media/panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_t.jpg",
  "pitch": 0,
  "hfov": 360,
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_8488CE1D_8CBF_BC96_41D4_1995DE397297_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_86013272_8CC5_C493_41D8_2AA379F59B11",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_86013272_8CC5_C493_41D8_2AA379F59B11_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_86272918_8CC3_C49F_41E0_340033A6AD96",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_86272918_8CC3_C49F_41E0_340033A6AD96_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_862BAD48_8CCD_7CFE_4192_CD1DAC706223_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
    "camera": "this.panorama_87C789C7_8CCC_C7F2_41D5_729BBC2CB78A_camera"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_862F89F5_8CBB_1AEB_41BB_68F31F5F5F37",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/zoomImage_86465C25_8CBB_196B_41CA_732C0336B86D_0_0.jpg",
    "height": 553,
    "width": 442
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/zoomImage_86465C25_8CBB_196B_41CA_732C0336B86D_0_1.jpg",
    "height": 512,
    "width": 409
   }
  ]
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500,
  "id": "FadeInEffect_862FF9F5_8CBB_1AEB_41BE_67CBD4798A85"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_out",
  "duration": 500,
  "id": "FadeOutEffect_862FE9F5_8CBB_1AEB_41CD_5BE5F86F082C"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9164A5BC_9859_0BB1_41C7_D55C6498118C",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 145.11
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_911F35D1_9859_0BF3_41B2_99FD776546A1",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -11.14
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9112B5E6_9859_0BD1_41DC_930EDFEF1424",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 45.68
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_911495FB_9859_0BB7_41E0_BD7A2A7D4DF7",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -98.59
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_910DA60A_9859_0851_41D5_97373432C5A9",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 53.88
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9106161F_9859_086F_41D2_C5A0ADB52657",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 84.15
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9138A633_9859_08B7_41C0_B7DB1F403A55",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 90.3
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91312648_9859_08D1_41B8_1522B2D3B6B2",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -130.98
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "playbackBarBorderRadius": 0,
  "toolTipFontSize": 12,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderColor": "#000000",
  "borderRadius": 0,
  "top": 0,
  "toolTipBorderSize": 1,
  "paddingLeft": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBorderRadius": 0,
  "shadow": false,
  "toolTipFontColor": "#606060",
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressLeft": 0,
  "playbackBarBorderSize": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipTextShadowOpacity": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingBottom": 0,
  "playbackBarLeft": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadHeight": 15,
  "progressRight": 0,
  "toolTipPaddingRight": 6,
  "progressOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderColor": "#767676",
  "height": "100%",
  "id": "MainViewer",
  "width": "100%",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadow": true,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "paddingRight": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarBottom": 5,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipOpacity": 1,
  "toolTipShadowOpacity": 1,
  "minWidth": 100,
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarOpacity": 1,
  "progressHeight": 10,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "toolTipTextShadowColor": "#000000",
  "minHeight": 50,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowVerticalLength": 0,
  "class": "ViewerArea",
  "progressBorderSize": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingTop": 0,
  "toolTipFontWeight": "normal",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "toolTipShadowColor": "#333333",
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingBottom": 4,
  "progressBarBorderRadius": 0,
  "progressBorderRadius": 0,
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "left": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadWidth": 6,
  "transitionMode": "blending",
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipFontFamily": "Arial",
  "borderSize": 0,
  "toolTipPaddingTop": 4,
  "toolTipShadowBlurRadius": 3
 },
 {
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "borderRadius": 0,
  "iconURL": "skin/IconButton_84F59B4F_8C7D_1F37_41A1_5D5A3EC616BD.png",
  "transparencyActive": true,
  "bottom": "12.3%",
  "minWidth": 0,
  "paddingLeft": 0,
  "minHeight": 0,
  "shadow": false,
  "class": "IconButton",
  "verticalAlign": "middle",
  "mode": "push",
  "paddingTop": 0,
  "left": "2.28%",
  "pressedIconURL": "skin/IconButton_84F59B4F_8C7D_1F37_41A1_5D5A3EC616BD_pressed.png",
  "rollOverIconURL": "skin/IconButton_84F59B4F_8C7D_1F37_41A1_5D5A3EC616BD_rollover.png",
  "paddingBottom": 0,
  "cursor": "hand",
  "width": 40,
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "IconButton_84F59B4F_8C7D_1F37_41A1_5D5A3EC616BD",
  "height": 40
 },
 {
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "borderRadius": 0,
  "iconURL": "skin/IconButton_84E75E30_8C7B_196A_41D0_B68F168D535F.png",
  "transparencyActive": true,
  "bottom": "3.74%",
  "minWidth": 0,
  "paddingLeft": 0,
  "minHeight": 0,
  "shadow": false,
  "class": "IconButton",
  "verticalAlign": "middle",
  "mode": "push",
  "paddingTop": 0,
  "left": "2.18%",
  "pressedIconURL": "skin/IconButton_84E75E30_8C7B_196A_41D0_B68F168D535F_pressed.png",
  "rollOverIconURL": "skin/IconButton_84E75E30_8C7B_196A_41D0_B68F168D535F_rollover.png",
  "paddingBottom": 0,
  "cursor": "hand",
  "width": 40,
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "IconButton_84E75E30_8C7B_196A_41D0_B68F168D535F",
  "height": 40
 },
 {
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "borderRadius": 0,
  "iconURL": "skin/IconButton_859F1517_8C87_EB57_41B7_639D93E679DD.png",
  "transparencyActive": false,
  "bottom": "1.6%",
  "minWidth": 1,
  "paddingLeft": 0,
  "minHeight": 1,
  "shadow": false,
  "class": "IconButton",
  "verticalAlign": "middle",
  "mode": "push",
  "paddingTop": 0,
  "maxWidth": 40,
  "cursor": "hand",
  "maxHeight": 40,
  "paddingBottom": 0,
  "right": "1.68%",
  "click": "this.showPopupImage(this.ImageResource_862F89F5_8CBB_1AEB_41BB_68F31F5F5F37, null, '60%', '60%', this.FadeInEffect_862FF9F5_8CBB_1AEB_41BE_67CBD4798A85, this.FadeOutEffect_862FE9F5_8CBB_1AEB_41CD_5BE5F86F082C, {'rollOverIconLineWidth':1,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#FFFFFF','backgroundOpacity':0.3,'pressedIconLineWidth':1,'iconLineWidth':1,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':10,'rollOverIconColor':'#666666','pressedIconColor':'#888888','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':10,'paddingBottom':5,'pressedIconWidth':20,'pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#FFFFFF','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'backgroundColorDirection':'vertical','iconWidth':10,'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':10,'borderColor':'#FFFFFF','pressedBorderSize':0,'iconColor':'#000000','borderSize':0,'paddingRight':5}, null, null, false)",
  "width": 60,
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "IconButton_859F1517_8C87_EB57_41B7_639D93E679DD",
  "height": 57
 },
 {
  "backgroundOpacity": 0.55,
  "paddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "borderRadius": 0,
  "top": 0,
  "bottom": 0,
  "minWidth": 0,
  "paddingLeft": 0,
  "minHeight": 0,
  "shadow": false,
  "class": "UIComponent",
  "paddingTop": 0,
  "left": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "right": 0,
  "backgroundColor": [
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "id": "veilPopupPanorama",
  "borderSize": 0,
  "visible": false
 },
 {
  "backgroundOpacity": 1,
  "paddingRight": 0,
  "borderRadius": 0,
  "top": 0,
  "bottom": 0,
  "minWidth": 0,
  "paddingLeft": 0,
  "minHeight": 0,
  "shadow": false,
  "class": "ZoomImage",
  "paddingTop": 0,
  "scaleMode": "custom",
  "left": 0,
  "backgroundColorRatios": [],
  "paddingBottom": 0,
  "right": 0,
  "backgroundColor": [],
  "backgroundColorDirection": "vertical",
  "id": "zoomImagePopupPanorama",
  "borderSize": 0,
  "visible": false
 },
 {
  "backgroundOpacity": 0.3,
  "fontSize": 12,
  "shadowColor": "#000000",
  "paddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "fontColor": "#FFFFFF",
  "borderRadius": 0,
  "fontFamily": "Arial",
  "shadowBlurRadius": 6,
  "top": 10,
  "pressedIconColor": "#888888",
  "shadowSpread": 1,
  "minWidth": 0,
  "paddingLeft": 5,
  "fontStyle": "normal",
  "iconHeight": 20,
  "minHeight": 0,
  "label": "",
  "iconWidth": 20,
  "shadow": false,
  "class": "CloseButton",
  "borderColor": "#000000",
  "iconBeforeLabel": true,
  "verticalAlign": "middle",
  "mode": "push",
  "paddingTop": 5,
  "iconLineWidth": 5,
  "fontWeight": "normal",
  "layout": "horizontal",
  "cursor": "hand",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 5,
  "right": 10,
  "gap": 5,
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "id": "closeButtonPopupPanorama",
  "iconColor": "#000000",
  "textDecoration": "none",
  "borderSize": 0,
  "visible": false,
  "rollOverIconColor": "#666666"
 }
], 
 "paddingRight": 0,
 "width": "100%",
 "height": "100%",
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minWidth": 20,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "scripts": {
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   this.MainViewer.set('toolTipEnabled', false);   var cardboardEnabled = this.isCardboardViewMode();   if(!cardboardEnabled) {       var zoomImage = this.zoomImagePopupPanorama;       var showDuration = popupPanoramaOverlay.get('showDuration');       var hideDuration = popupPanoramaOverlay.get('hideDuration');       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');       var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');       var showEndFunction = function() {           var loadedFunction = function(){               if(!self.isCardboardViewMode())                   popupPanoramaOverlay.set('visible', false);           };           popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', 1);           self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null,            closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);       };       var hideFunction = function() {           var restoreShowDurationFunction = function(){                popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);                popupPanoramaOverlay.set('visible', false);               popupPanoramaOverlay.set('showDuration', showDuration);               popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);               popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);           };           self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);           var currentWidth = zoomImage.get('imageWidth');           var currentHeight = zoomImage.get('imageHeight');           popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', hideDuration);           popupPanoramaOverlay.set('popupMaxWidth', currentWidth);           popupPanoramaOverlay.set('popupMaxHeight', currentHeight);          if(popupPanoramaOverlay.get('visible'))              restoreShowDurationFunction();          else              popupPanoramaOverlay.set('visible', true);           self.MainViewer.set('toolTipEnabled', true);       };       if(!imageHD){           imageHD = popupPanoramaOverlay.get('image');       }       if(!toggleImageHD && toggleImage){           toggleImageHD = toggleImage;       }       popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   } else {       var hideEndFunction = function() {           self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);           if(audio){               if(stopBackgroundAudio){                   self.resumeGlobalAudios();               }               self.stopGlobalAudio(audio);           }           popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self);           self.MainViewer.set('toolTipEnabled', true);       };       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               this.pauseGlobalAudios();           }           this.playGlobalAudio(audio);       }       popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true);   }   popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "unregisterKey": function(key){    delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){    return key in window; },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "registerKey": function(key, value){    window[key] = value; },
  "getKey": function(key){    return window[key]; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); }
 },
 "shadow": false,
 "class": "Player",
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "id": "rootPlayer",
 "contentOpaque": false,
 "borderSize": 0
})