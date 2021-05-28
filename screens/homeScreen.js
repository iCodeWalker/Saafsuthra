import React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import {Avatar} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.centeredView}>
          <TouchableOpacity onPress={() => navigation.navigate('washandfold')}>
            <View>
              <Image
                style={styles.modalView_1}
                source={{
                  uri:
                    'https://image.shutterstock.com/image-vector/illustration-featuring-pile-folded-clothes-600w-216177829.jpg',
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('washandiron')}>
            <View>
              <Image
                style={styles.modalView_2}
                source={{
                  uri:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAADYCAMAAADS+I/aAAABpFBMVEX////0454REiSZyjsAAABmm0EAABhyc3iazDtlnUHNVydnn0J9nz5mnEAREiX8/Pz09PTyZyLFxcWNuTmd0DwAABru7u4AABbm5uYIAAAAABLo2Jfc3NwNAARgX18SCw0ZFBVDQEERFQAsKCkAAAzR0NH86qJzcnIjHyBKajEpJifV1NS5uLi+vb2gnp+ErDiqqal/fn40MTJciDthk0CJh4hKR0hEXi+ko6NVaSxsamvSwot4bVNEQUJcW1uTkpKDhIsxKjIoMB1ZgDsbDiAVAB4gFyBlfTFUeDwbIBCBpzhphTF+oEISABVNXStCVjLBVCeeRyWCOSO7rX2XimcuRCcYIxspHCRZWmM5OkVKS1Q2NkIkOg0eKgoACgA2Uh4ySxovOwlTah9ylClOYho+UBMXHwA2PCNGUyYsNQ5LVypSWkAzOixIR0ArKSAcGhAAFRwiAABSYzIfLTRkLhM8HxNkLBHnZCN8PiRkNiQ+KyP+ayOWRyNQLiUAFB/DVSczHSConnAUJSFXJiAWLh9rYE2IfVxMRjEpRCE/PjIkPR8jIzJ7uSaiAAAayklEQVR4nO1di18SS983HARChbMCLrjAkqwut3W5IyoLonghs06ZiKc0rbDnNTvP7a1OnbfHc7Jj+U+/v9kFBLmtiin0fD8Zl2x3vvO7zsxvZnt6Oh2ELZXJZFIbOcGnu+62XDGEX4IY6UXXE3Tdbbk6UFiM5KxSM4Ch0T7V42/Ja25V+6H35lEcv4mEBpQitFsEfPShuOmam9Ze6LjUL+nQVhzkqEpjqgMDyoHQDEEkC8HZjO+6m9dGkI6naVBbbTogcKMhzDSYDg0MhLa2FpUapQv5u8ZDMWhVKWqtNrRdCGow01R8VimaLBZw8EmgS5TYg6JaZRFa8Z1229tjcw2Uv0yn9NfdyPbAi4JFVgPSq1b5S6yHf1rmr5wVrruNbQEEE25WZCUZqFIT2nKryB5TqiRrbdrJXXcr2wEBcbqeFA4wA+lUnF7UAlFBjKVk6jiEyQ6EWBaFr7udl4cXpbfzsfmQGEf5HoJ2LYVLLkivQi6ldkBbSAXozudKgkfSpLfSovRckELwGabin5kI2l48Rh5qlEb8tTWyJfQmQCvH6ShgzdVK3ihkDut6zkRQxp9yeKBL3DSirqypF4CeIvhYMp7fXJ9zohJW5lIb+ZwqKcR4L+GhqgIkZ1VWQOtCTKNLkzTN3oA8QmdivJw/l0Lo5bMXO9nd3d3liSFArwh4MzGxDF9md56/ePYSIev6TM7P8QSlp6zBgUquVn/jmxDmZv969dCTPkGVZ+88e7GA6fUaAGqDWkJvL/yBn+JHgwR17xAQz+68eHYHoVVtlVBTze4lIHNDmV8tdKQvnFu/8+z5rkRR5CYHIndMundock5ZIVXtbLhp+hexR65BhUmvasMJLIeG1PI51nBWD7nXQlopQ4JcP5ixzuWa+FkSmb9z0qQnwhsrz3aWsSwvSLJMdqgwt5oOaQHKYHRur3d5BzUxSA7Zv6MXJvncvP35bm+v4aKyrObau7s3P8+63ezcfAGuqjYMNXbCPTqHPfGdeOr4DfQkO2FoD02Jq9rQi93z8kSx8wwvmoiVQcj7PYiSYfQyO3Rppa1LF9u7dF1DNtekDeN299WP5kgV2lsGEVw11Lv5Jm6WpNFVeyYyiZ4PyZMniMdwGkVLkK3y6uVmVHvCZuuVilUvsDstiYrsID+QUqNsNruws7Mz+fz5JGAh2y8GXxmEm0u1x+RGVzl05VNAtBXHoYn+7OT2K8j7Vk5wyqtS+QEqVdyWiGysOy0Ize4tLNfrsHI6JeVUu81sFXIms/3K8ghm8/lQY2kAzd6J3clXS5DXb6gEnNjqddVt0QH0ej3jR4W5ub9NnO00g6QIy8v9u/390F1vbE2bY2Kvygnr42i5gepiEfT2LxSsCGXGY0TrKT3qf/qzq8Z7vVWXMyzMiciw7oP9QmFtda05VUiFHW3iVg0eveitSxRHh+WFWYTmEhwh11HoX99dzroPhtRVVBe1VXC1oGpCZs+ledWAtKFsXSPF4py0o0wkxpzLcDyz/f139w8qDUK9sKipHrPGW1xkvFnueEEQc69qLEuyrgngmRqXobNnkZwErpnVaqkOnI8qgwKXjzcCeM1wOCwIHBfjeQFN1lFeyFKzBbTul621VSAz4HomjdlKqaa1Gg0o7gD+gXcuVauL2BFxkXtXgkEuVzS6tbW9vX38y/GSs7+OlRqGFt4gm/fC3ZoDsfYf7J/2oWFhLQpwlXHckqofjV/09iVEXBXeITS/XKu8ht5J5AxfZsHTO4vF2jdRQXXVFa3EWktL9F5ag5mn0hIuXsXV1GOqVmcRil3uLhS6i601W3ZMhskg1twiQI1dLanqEbqkD06ly3fUKNn+WqbLS5bLJ2UrWRDr6r2yVNX3QsoqtxRt7V8Tl8z5+SclpkqNplATZNS9k05/GzLtjQWswQenbmBVWU11q/U0voAuNULXrwfL+qtdXTibIRkmXubbErnj2C9l5097cF+rKa3CifeWQZVB9GWWW8PHpwaz+LezvteQbddamHAPqN6dK2VM6qH9UFAqaSlirbVy6unLhBsqEyoJVRss1Cjv81S7kjEOU+13L5eo9u+vVmNJRp9eyljj0bKlKquTVIxnubaNh2N7mOpByesZIIOoxnas9UXC5ovPCDNPlWWh7p9xvureV5cO2aeIiVLdL7k9w2rojFv6RcaKmw+hCwf3vKsoVI02eu+s833SMn85Bzjslpb3y6khWxFV8e2Vr2QMR0nzhZcgfS+VJZmmM2fsVP0qf8Gr1kV4R1TgXYmqepmFBKlopWtrhX33nByPow9YL7iyrItgg9HgtBuypGpDVe/OtbWOJofjaj9bpGpYcAWrHXD6jpw1KJu11finAXzItbiYxjcM7U+eVV97e+c3UnfFuFrsUIM7hJ1EMapqcJ72Uo6v95svlkSYNu9NFg4OWPZgv3DvDNHmM9AXwAoW6oKxqDIT+9pqrzQQeilnWSZ2sVkXXWrHUBblmQkzdW+bl+VNbzDV1b2iUHdceIwqyrNYeRa6I8e3Eoi9yN39S4bSKkLNULztQmVwWL2bkYbCajW7WLbRks2+kUOVMl+kVphC9YbgJaqvLj3gr4YwKWb7xY7tzxy4WXY9k5krI0PLoUqy6AI5RG6vyXT2kMzO4yO/RmRFuhSM4e6WRoiG1YpUCRe64Be3HIdvCqDzxwUC1aSBFaY6IS+mxv/+8f7Hv8vw/z4rOOB/FCRDgVRfUy4QwJaK34dk1YjqHBfwIbn6059Fqrsy5iFNJIPefvjpw1tzOOz3hwWeIRtlzOTcpBhpikKdXDzjf0WqstLtyPnHNtRS/Sntoqk+bzqC0FOEEM//0+lkf8JU2X/961/v/00jhP4Z5+tZHDkDTumuuxi61UOFgVOJFtM1jUyqifMvZyR3my2OGV40pkrxtn86//2/Hx/cvv32Hfvg/kf23YefAG/fvv10/2dEj9eQJVI41S+UhohYqFL+i4UpAm/EcMiiajt3Eqx/PdSEKcS9Rpk+lXDaP94GZiK9n+6//+39/Z/K+PDh7Xunteo/6Hz5Arik5X9kir5BPTHPZqoA/nd+ZUUeVf+5R6zM86br4OrdRkVTrPPdhw8/VZD7qeLTh7cf2V9/r3DeFBdBz/D8Wf/kfHn+obAYLCNURlAeVe7cc8Hh3eZUhxpYP4nesb89eFvJryTht58+/vZ/7O/37yOGIrwxQZVLIfOemOSD8y3JFJKTNW3FCkZ5GBeakRUwveeeSctNNDNVbE+Wutm3CX26/eD3X3//+cHtt0Xc/nT/wcd3v//xK3x7//77259Y8E93Xhb2JhfuSjz7s/t7ZZlOzIcGatwvTgzlzS8Q502CdakWVHt715xnXJ3ORILjtd8G/P7g/e/sr7+y7B9AEF5+e//u44P778FR3YafzGQ2WyKJs8GFgrs8063uPXDVBhox2MijypgD56Pak19uQVXdu4BsHhNJUpSH8cbCqng+ZUFoicVU38PPp/v3fwYpAm5jZwwovtz+z+RyieXd7MIqe5A9LTMw3DuoJ1MsVXlJC2N3n4uojsjvtSxbMQw9X5nLHBRevXr2bO/ePVzDcbc/O4fJfJI4PfhYfC1yLH6C/7O/v39wcIBLzQ4ml3tP3YJhYSV4Oaoe+3mGNqSQQUcwgGvFVVxmnGcL/xBJQrzAcmLffSqTAoHW4MFvxnuTIhYWFrLLQ1WjQ0P/Sl31FQdxTQtcyqBo+VQ9NnRwODI2Nbc20brGBrqjf+HefmbFaJyfm1tfZ9fnjMY/H9QyLBH9t3FNrM8r1i+pq1Iy9VBmrXLuDE9pFTGgDM3ICjYe2VSZCJqeGhu7BZgens3iUtcWopXajKtRlovY+WP4z58ffDpL8/7H98N/iGVODS+5Oh91Vayo4lXd6Opa4QCSCHZWXmLokWmrRAQ9GhF5AsZGHgWGl3ZwOWML2RY5lyuM1BPZvc9/ZP7z55/vfpbwv3/+h/28mp1o0XNZ0OrJCoCKZ3f7l8Uy8V5W1uiMscrxwEyugqhI9tbUo9fzjydxAdW5aiXVYmnWcn92ZxIEc29yJytVfMv5f2fr8ko18ENLsiazGRlxlUjYq4kW2Y48nF6n7+3KLCSsbHdlPaH6wiXfpav1vpI1ECVaZku+vLUOUYnt2AgI1763e17ZthfqF7JGZ3yLHNgbQI2IloV7eGR5gmsBz7HvoK1oMUQuIdx0ZONNoUe3mhEtChcs98ji3AO7k/aS1M4jXinVhuPGKsSbjFe9GTlES3THph4+ep0Z7pvdE8O/VN76XRird2WlSxHUaP+5L/VGNtFTviNA+CgwtzI7ubCL90KpDcUo0n7SxWwDfiY2ZaRLpkCDaTQib25uoy0ITx1OHzkCB6+2nkM4GZJI18SJi0GyELyXDPLNLMaOnByCstedB2ZyFyZaQfjWCMj48NH00dHRX4XCL9svXjx/vrODY//uLqROEyKGzoEJXAS8m12Y3H712GIZ7pu34JLpXFwlY9W8x4fqJEtUHH25JNEqyiJpEDTGQ8Dh4eGjR4++fPkyPQ3d8Nfrr45AYJRlMxmn02kpYmUF/qysDK8MDwMp+CSiLxM4Opp+dPgQrgSXHPmSIWXP2IdRTSmt3o+m20a0LnmJvoTSlyMyUeq74qUO5c+h1NZ9xNBfU1dJtL0Y+yJ3wrOmqt0zSj/sHKIYSGYhDVFd9qELQyDtLIwdJuVRDVdtovKkOkl3S5C3vqZz2CuWwmIdJ1KMsSNZCTCFzKcRSUAdZqUSxg6bbsEus7Of5kph1IHKizEiq6h5lC5PFncs01tjBzI0mEDW0m8J5ivNGq4SY19kjGtsdGkfNo/Yqetu8oXxUNHSB5OILmaFPpSOBq67xRfGSJOt5kX47WZprEqaXVrNt+lO1eBbf7WqfDZZaYfklOKzWqVG+Xn6upt8QYw9arH7DzKlUv6bcWkHgOvq6w51wlMtTkHz2OmZ4tuMuFtGo02z7RumfkeMjVibTnnrA3Q59ApLShDrwIBWGc2cdzrpujE2NvJlpXlBUsJecZyWbSmkLdaGu36dnuoYtjBEf/gXWktvNxu0+s10pPLjnZBWLDpVarXp469fpm6N3Xy6YyMPp1f+iIa0WleTfElA9Gj10VT2Ra2mtG4ZArbTD0duMt0xzHP9cTQ4AM3WuhpX5QNT9sycKINPxdMoi5sWge32/l/TD2+mdMduTR0eYZ5KaXVZu9VQqphpzWhAH0ZYF0qbhOBdaPF4/+vRI5HvjSEsitPx+NgVAnmW9LDhliJ/PaY9uDAOHae12tMdqZhuOrrmXn/95fD6+eL7Tx1OB9xAU3naTGhluoEH1tnM9kCDOOSxoTeuUAVbyCzwbuO065hdGZ0+nBoZ+/6EpUnUkYfAMjMbXcSHSmkqxbF40GAxkQzYUaJxcmHiUmgW2J5eTLoeXD7oWn3snBMV+tb3CEdSp+I1oC9Ho86na650NUtolmYgGLUitr768qjlkTyecAoVqnRkoOSstMqga+2xc/j19KOH0uzzVVEcGZnCKyCBzNPPa9HFdEgjsqykCT40HX2Dz1+oO7/viSBrQMZOI48wg2aj4g2qxCvSBX1eXP322JL5evQFRFwz434RdhXLHSDE6aOvB5+/HQPFYEjSqJpGhIKuAlqJhJn6Ckr6kd0qc0O0juISyPwN6CprbiUqtDIUTLtW1z4/Zt2B10dH01+khZQK5i3Il34FL+Y8PHyECf71dX8WMwwGxbtWyxHX6Uu3Bprfnq7k/b5GmS8Zps0ocZ4DDEmvP4DQLChQ8dbVBiz1tzIUwufdR6PHx99mH7MsOxr4+hVzF8k/FOlPVS+7FJepDjG714HU3Irl8exxFN8lpKxHseJ+ymB66wlajwuMqeGyFBlmzch97tp1HekNRxBC9qXCqmvxtLOLfSx1tKZYFiZtlcClyGkgD+y3j78B/cd4W8wpxOJs9vHjz2vHq1GXK40JFi9RhyEurZP+MRRcBJYoEuYb7mjAoMZpK6K5C24T1pE+PpzI4GNPzSLldJGyto6oRWjL7IsYELfBF3fYip2jKfWQpp4ITw1FFOVi9NVTkSXVYomRsSEzomOXPkiKJLxcfIa1WoGz9aCAZbIoCUWrLYsW3iml3crwIpGAF/gGf1SKvLDwNcpG9HAsl+oHNWCU0eMlq3M9F+ZlnHOjj41CyyJtPHBfTwFlvy0SSGVWrOIRt9Y3s4Xj7WhU3OaJDQ5zqRC7XJTsQAk5yxZwzKTyfnzGlpxW6ZhxaAk7fgXnKmHOJsrDMISX58Ljfv943JbIz2ymwBjpN0tPXv2yvb0l2mJ5Q0FZg7FBV9Rol3cbgE8Hik/u2NcdORVHeOTv6yK5GSzQ2Pc8aV+nL1Z34x4Qwn6V2AGOwCj75umdRngqqkYmtZG3qcKc10M1dq/1QHptVizQ8x1ZdSXAJ7pBB5CUh2gEhiJJk15//raaPFwC721I8F3y6IS60Hm8/gh2RCgR676HupRAEvy4gxV9Iuu/+JlVNxk64CjEA9LR5mY6Ivi6Tm11egrim2iUZjPEdXoUWN6oc+YvD4hnPsGfcGMPbQeAws7YBKJV0tRZ0JMMH447aMi/7TRNA0l6Jh72euRXn3UA9BQTG08EaGQWOZpBkpFxwUs1zfI7Cjo9STE+bjwikgSAg7U64mGeMV0g3t4IQDaBkymC8Pm8UkY1bovMBAJuVpSgBOAo8ERnKqve48Wmx9pRM1jZCFD0yUvwbwZ0OlF2HsInjgUSo1IgtJpBbGCBLOseDQQckYQtPu4PhwUuxnt9kBx2WJCECCiIjrMKZtodiCTi+IEeON9t+RyXGw+9R0xlrFYxAiL7qCMCcoOxCuPpIv8JYwzveAByGTMyBxLjYXxsNdmxrrMpPP5RBOGBHeeYztfOZtCNg7NBdNjTjVKsgikARNs5fXVjYRqlrZGrmb66aYjbO/+BbPJAIHsbT6K80Yjb2a72uacwjZq74jmRMkCaL3tKdseARDfraYJXCNJuvsEPiWwr9I6qEr6uhnDxg3cbQGciPXike4pYLMbzvBdGtR5xyeOaElBIltr24ESdCR+IF3E3nauwszB2up41GgLR9GXkioXIEF4uHE9ERq3IbBXpjAZmIgmbLR4flxCPx222RMRhx1PCNI3c1+IhGBiPR863dGIiGcLHC35g5wi4WTsMc/GA3moGIgmBMOnxM5pq1RQ/p4kkuHEa+uKaHpnLj4IgHOO8j6CwLeGWSo2VUFx3pDyEF+jZZkZZGrMS2dnFGScRbGSc88qbufeE0bU9RpbxNzewqpkms7QwQbOBGXHGgvf6mPNOEzLmhsc8XD0onzAewQvkNI2FJQHLjabFSUJxlhBPpgkcjycILzndFLj2UQY+3Y7yeDyMBHjnoYpa3V6FC5tnWv9Sd+DyT+PpGJBI1gnI3YAfiGoY/Si5N4da7+XsCuj96MofIHsjYOIDPwJTPRWLswgFunuGXQcjPJtYtRQQutf5mjzecMJBI5w9O4QGmxM6HXqPV0gEcGUBphnwe7tRniaGF8QKNBF0JMzfgDLYdgKGtpQvVlFJODoT53xM18gSl4kwMGwPjycCxSIYOhBJ+GME05kVPbXQkxTBh/22mdNxPeuIxIGip3uKJ/QUEQOKZVMcBYIC7/OQ3UOxR3Q345GSno4m/LhEpAsrREw+v0OSpD3h53xU9zGU4BEcIsuAX84Ooc4FFaYhdIzaui04noXOlwCVjXDdvxLri4DWhn+AZVgSJOrguymGNALJIvaHINqjd6N4N7vbCsRrj+XtUjBI7lGvHQ//j1KUhx/O1t7Hzt5g+M/9xLKOxflWfHUkxRAdmx/b7HZZaZKJ4OIzqTn6zZ2nnaoHJjNNt1xc8Qgp6+yWKx3E5+6l2/lM9O8KCtmR0Gw0o+cyd1xB6TFS+JgFl4ynmt5Q4Bx4tGFqqBfs20FtxcPCtFG/Tl/Cd21oO4BXk6xxvt7kH5XaDlU/FE0bzZRqRsz2zhvb6rkAsppRJEyc2fhGraS1Zx50p13N2EugO48qkOUTuFQJWQORuOArHeShT6VrnnOnXY34y+hEqj349JGEVB9oR3a3wyZ4GZNwXPtEP+1xV6yc6iF4iucAgHKakZleSdc+ulC71hVURegoHx+ORwJull2p80DVbqJagUiou6VaAb7O0ze137pzM0skqKmVandS1Ttqoo12zWEro0ODTV3oI5AtVfkmSCHoMrqJKj7CNxrEh36eUi3lhR2ZGDYFOY7sq2nphG0Y2jQ+7bcbYIrNrKAl6VBIoNqdbqkMEyHE8xup9fXRg0vtZGkB1Y1AMqnKbaROTjKK3JXdo6fvJmC4r89oVCgUg4ODxuGrukmP4ofBf6l2I6qoDp55BRgHFWdhvMr2XCFKVDfh56TEcbP0r8bN/Enfxulvb8KvbOY2FR2JIlUn71QMC32WYfCAFgvn7Bu2GBV9lhzjZfLMpnHY6VQoLAj5VE7nJtfRVAeHkxvGvErFJZ0bAnfiU8Hfuc2kyptEg0aCOUky3pNhjkl6cyp+M7/R4ppXBmPZeLD6GY3Ft0YcpUrfDir6BvvgF43GPvwb4quEkgKfCAiiLFLlBePwMIc4oyWZS1o2KDKMmPwGpUh6k/zJiZcnTown35NdJQbjThUo27DRODhs7OtTqQYxjz6LyqJQQFzug5b3GfMbSYsqPpzP5ZObOZUCMhPVSRXVQaAnqARVUpW0DFo4xDuHVckcdMkGIRCbSQ6dEL58H/LqBKSodVTfCaB6qpzqJJnzwo8qx50IeVXyBN6ojPiLZD6ZTG6CQiKf4EyqFBsCn8txm3zSUkVVYQSWuZzTohCQxSkgDiH4bDxBSMUTG3kG5QhOQMibo/LX54CNcV5BJFV5xAmDHD+s4GIKfpNXISKJcjkgm8zx+aQKQYdweV7IC8OxnDcPyigMV1FVnDAnziTHbeY4DvoO/lZt5JwcRREneXKQozybfQQF3ZSnro0p6F7SqVKlgNMmCFGRTOZAlFieqpwk1Q3VZjKvAGmrLCfgeeCrDRBYsuhGy1QHERi0xaIwWixg1vA39gHgdJHCiAbh1ahAIG8jfLguotjMsKcBO8X2qsB5s/gW5899xr5h46AReyQLfKUYBGPGX4H1Dhf/d2UKMVj1/hopNcdgyeGefqxue0UqNDh4+vFHTQy7G/+l2o34f1p/PLdCq5kBAAAAAElFTkSuQmCC',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              width: width - 290,
              marginLeft: 35,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Wash & Fold
          </Text>

          <Text
            style={{
              marginLeft: 70,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Wash & Iron
          </Text>
        </View>

        <View style={styles.centeredView}>
          <TouchableOpacity onPress={() => navigation.navigate('winterwear')}>
            <View>
              <Image
                style={styles.modalView_1}
                source={{
                  uri:
                    'https://previews.123rf.com/images/yupiramos/yupiramos1511/yupiramos151105904/48211420-winter-wear-clothes-and-accesories-graphic-design-vector-illustration.jpg',
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('blanketscreen')}>
            <View>
              <Image
                style={styles.modalView_2}
                source={{
                  uri:
                    'https://thumbs.dreamstime.com/z/blanket-vector-drawing-neat-cozy-snug-thick-feather-divan-blue-velvet-throw-roll-navi-chock-white-bedroom-backdrop-bright-125762809.jpg',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              width: width - 290,
              marginLeft: 35,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Winter Wear
          </Text>

          <Text
            style={{
              marginLeft: 70,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Blankets
          </Text>
        </View>

        <View style={styles.centeredView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('householdscreen')}>
            <View>
              <Image
                style={styles.modalView_1}
                source={{
                  uri:
                    'https://st.depositphotos.com/1354495/4744/v/600/depositphotos_47441051-stock-illustration-green-window-curtains.jpg',
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('carcoverscreen')}>
            <View>
              <Image
                style={styles.modalView_2}
                source={{
                  uri:
                    'https://images.squarespace-cdn.com/content/5ae2f5675417fc851a092ebe/1526376448370-2XDF6B9AI46WFALVG7J9/image-asset.png?content-type=image%2Fpng',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              width: width - 290,
              marginLeft: 35,
              marginBottom: 25,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Households
          </Text>

          <Text
            style={{
              marginLeft: 70,
              marginBottom: 25,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Vehicle Covers
          </Text>
        </View>

        <View style={styles.centeredView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('sofacoverscreen')}>
            <View>
              <Image
                style={styles.modalView_1}
                source={{
                  uri:
                    'http://www.johnborghi.com/images/category_7/Buy%201%20Piece%20Sofa%20Cover%20Cartoon%20Print%20Double%20Sided%20Waterproof%20Slipcover%20%20Slipcovers%20Blue%20JO2380330.jpg',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              width: width - 290,
              marginLeft: 145,
              marginBottom: 25,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Sofa Covers
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  centeredView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  modalView_1: {
    backgroundColor: '#00b4d8',
    borderRadius: 80,
    paddingTop: 50,
    height: height / 7,
    width: width - 280,
    marginRight: 15,
    marginLeft: 15,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalView_2: {
    backgroundColor: '#00b4d8',
    borderRadius: 80,
    paddingTop: 50,
    height: height / 7,
    width: width - 280,
    marginRight: 30,
    marginLeft: 10,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

/*<Avatar
        rounded
        size="xlarge"
        source={{
          uri:
            'https://i0.wp.com/cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png?w=499&ssl=1',
        }}
        containerStyle={{marginHorizontal: 25}}
      />*/
