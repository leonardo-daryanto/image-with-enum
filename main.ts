enum Images {
    //% block="Snake"
    One,
    //% block="Check"
    Two,
}

//% weight=100 color=#0E6655 icon=I
namespace images {
    /**
     * make a image with enum, e.g. Snake, Check.
     */
    //% block
    export function makeImages(image: Images): void {
          
        if (image == 1) {
            
            basic.showIcon(IconNames.Snake)
        }
        
        if (image == 2) {
            
            basic.showIcon(IconNames.Yes)
        }
    }
}
