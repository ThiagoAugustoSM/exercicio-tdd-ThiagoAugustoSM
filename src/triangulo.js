function Triangulo(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  
  Triangulo.prototype.toString = function () {
    return `Lado A ${this.a}, Lado B ${this.b}, Lado C ${this.c}`
  };

  Triangulo.prototype.tipo = function () {
    const {a,b,c} = this;
    if(a == b && b == c) return "Equilatero";
    else if(a != b && b != c && a != c) return "Escaleno";
    return "Isosceles";
  }

  Triangulo.prototype.tipoAngulo = function () { // Using the cosine formula
    const {a,b,c} = this;
    const cosA = Math.acos((b*b + c*c - a*a) / (2 * b * c)) * 180 / Math.PI; // Math.acos returns a radians number
    const cosB = Math.acos((a*a + c*c - b*b) / (2 * a * c)) * 180 / Math.PI;;
    const cosC = Math.acos((b*b + a*a - c*c) / (2 * b * a)) * 180 / Math.PI;;
    if(cosA == 90 || cosB == 90 || cosC == 90) return "Retangulo";
    else if(cosA > 90 || cosB > 90 || cosC > 90) return "Obtusangulo";
    return "Acutangulo";
  }

  Triangulo.prototype.valido = function () {
    const {a, b, c} = this;
    if(a >= b + c) return false;
    else if(b >= a + c) return false;
    else if(c >= b + c) return false;
    return true;
  }
  
  module.exports = Triangulo;