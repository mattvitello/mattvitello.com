//$range.glsl$
float range(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    float oldRange = oldMax - oldMin;
    float newRange = newMax - newMin;
    return (((oldValue - oldMin) * newRange) / oldRange) + newMin;
}

//$rgbshift.fs$
vec4 getRGB(sampler2D tDiffuse, vec2 uv, float angle, float amount) {
    vec2 offset = vec2(cos(angle), sin(angle)) * amount;
    vec4 r = texture2D(tDiffuse, uv + offset);
    vec4 g = texture2D(tDiffuse, uv);
    vec4 b = texture2D(tDiffuse, uv - offset);
    return vec4(r.r, g.g, b.b, g.a);
}

//$transformUV.glsl$
vec2 transformUV(vec2 uv, float a[9]) {

    // Convert UV to vec3 to apply matrices
	vec3 u = vec3(uv, 1.0);

    // Origin before matrix
    mat3 mo1 = mat3(
        1, 0, -a[7],
        0, 1, -a[7],
        0, 0, 1);

    // Origin after matrix
    mat3 mo2 = mat3(
        1, 0, a[7],
        0, 1, a[8],
        0, 0, 1);

    // Translation matrix
    mat3 mt = mat3(
        1, 0, -a[0],
        0, 1, -a[1],
    	0, 0, 1);

    // Skew matrix
    mat3 mh = mat3(
        1, a[2], 0,
        a[3], 1, 0,
    	0, 0, 1);

    // Rotation matrix
    mat3 mr = mat3(
        cos(a[4]), sin(a[4]), 0,
        -sin(a[4]), cos(a[4]), 0,
    	0, 0, 1);

    // Scale screen size matrix
    mat3 ms = mat3(
        1.0 / a[5], 0, 0,
        0, 1.0 / a[6], 0,
    	0, 0, 1);

	// apply translation
   	u = u * mt;

	// apply skew
   	u = u * mh;

    // apply rotation relative to origin
    u = u * mo1;
    u = u * mr;
    u = u * mo2;

    // apply scale relative to origin
    u = u * mo1;
    u = u * ms;
    u = u * mo2;

    // Return vec2 of new UVs
    return u.xy;
}

//$transforms.glsl$
vec3 transformPosition(vec3 pos, mat4 viewMat, vec3 mvPos) {
    vec4 worldPosition = viewMat * vec4(pos, 1.0);
    return worldPosition.xyz - mvPos;
}

//vector objects
vec3 transformPosition(vec3 pos, mat4 viewMat, vec4 mvPos) {
    vec4 worldPosition = viewMat * vec4(pos, 1.0);
    return worldPosition.xyz - mvPos.xyz;
}

//$Color.fs$
uniform sampler2D tMap;
varying vec2 vUv;
varying float volume;

// RGB colors of image
#require(rgbshift.fs)
void main() {
    vec4 texel = getRGB(tMap, vUv, 0.02, 0.00001);
    gl_FragColor = texel;
}


//$Speed.vs$
uniform float aspect[9];
varying vec2 vUv;
varying float volume;
#require(transformUV.glsl)
#require(range.glsl)

// Speed of breaking up vectors
void main() {
    vec4 pos = modelMatrix * vec4(position, 1.0);

    vec3 p = position;
    p.z = 0.0;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);

    vUv = transformUV(uv, aspect);
    vUv =  vUv + range(pos.z, 0.0, -500.0, 0.0, 0.05);

    volume = range(pos.z, 0.0, 0.1, 1.0, 0.2);
}

//$BGImage.fs$
uniform sampler2D tMap;		//What loads image
varying vec2 vUv;

// Center Block
void main() {
    gl_FragColor = texture2D(tMap, vUv);
}

//$BGImage.vs$
uniform float aspect[9];
varying vec2 vUv;
#require(transformUV.glsl)

void main() {
    vUv = transformUV(uv, aspect);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
