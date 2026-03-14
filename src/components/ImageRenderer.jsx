import { useState, useEffect } from 'react';
import imageStorage from '../utils/imageStorage';

const ImageRenderer = ({ src, alt, node, onLoad, onError, ...props }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const isStoredImage = src && src.startsWith('img-');

    useEffect(() => {
        if (isStoredImage) {
            setLoading(true);
            setError(false);
            imageStorage.getImage(src)
                .then(imageData => {
                    if (imageData && imageData.data) {
                        setImageSrc(imageData.data);
                        setError(false);
                        if (onLoad) onLoad();
                    } else {
                        setError(true);
                        if (onError) onError();
                    }
                })
                .catch(err => {
                    console.error('Failed to load image:', err);
                    setError(true);
                    if (onError) onError();
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [src, isStoredImage, onLoad, onError]);

    if (loading && isStoredImage) {
        return (
            <span
                role="status"
                aria-label="Loading image"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    background: 'rgba(15,23,42,0.7)',
                    border: '1px solid rgba(148,163,184,0.4)',
                    borderRadius: '6px',
                    fontSize: '12px',
                    color: '#94a3b8',
                    backdropFilter: 'blur(8px)',
                }}
            >
                <span style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    border: '2px solid #4a9eff',
                    borderTopColor: 'transparent',
                    display: 'inline-block',
                    animation: 'spin 0.7s linear infinite'
                }} />
                Loading image...
            </span>
        );
    }

    if (error || (!imageSrc && isStoredImage)) {
        return (
            <span
                role="alert"
                aria-label={`Failed to load image: ${alt || src}`}
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    background: 'rgba(239,68,68,0.12)',
                    border: '1px solid rgba(239,68,68,0.5)',
                    borderRadius: '6px',
                    fontSize: '12px',
                    color: '#fca5a5',
                }}
            >
                ⚠️ Image not found: {alt || src}
            </span>
        );
    }

    return (
        <img
            src={imageSrc}
            alt={alt || 'Embedded image'}
            data-line={node?.position?.start?.line}
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
            onLoad={onLoad}
            onError={() => {
                setError(true);
                if (onError) onError();
            }}
            {...props}
        />
    );
};

export default ImageRenderer;
