export const updateObject = (oldObject, updatedVales) => {
    return {
        ...oldObject,
        ...updatedVales
    }
}