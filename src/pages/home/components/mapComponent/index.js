import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { transform } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import "./styles.css";

export const MapComponent = ({ lat, lon }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const position = transform([lon, lat], "EPSG:4326", "EPSG:3857");
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: position,
        zoom: 17,
      }),
    });

    const markerFeature = new Feature({
      geometry: new Point(position),
    });

    const markerStyle = new Style({
      image: new Icon({
        src: "images/location-pin.svg", // Substitua pelo caminho da imagem do marcador
        scale: 0.05, // Ajuste o tamanho do marcador conforme necessário
      }),
    });

    markerFeature.setStyle(markerStyle);

    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [markerFeature],
      }),
    });

    map.addLayer(markerLayer);

    return () => {
      map.setTarget(null);
    };
  }, [lat, lon]);

  if (!lat || !lon) return null;

  return <div ref={mapRef} className="map-container" />;
};
